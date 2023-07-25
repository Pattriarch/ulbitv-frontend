const fs = require("fs");
const https = require("https");
const path = require("path");

const jsonServer = require("json-server");


const options = {
  key: fs.readFileSync(path.resolve(__dirname, "key.pem")),
  cert: fs.readFileSync(path.resolve(__dirname, "cert.pem")),
};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// Имитация задержки
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
    );
    const { users = [] } = db;

    const userFromDb = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromDb) {
      return res.json({
        id: userFromDb.id,
        username: userFromDb.username,
        avatar: userFromDb.avatar,
      });
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// Проверка авторизацию пользователя
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }
  next();
});

server.use(router);

const httpsServer = https.createServer(options, server);
const PORT = 8443;
// Запуск сервера
httpsServer.listen(PORT, () => {
  console.log("Server is running on 443 port");
});
