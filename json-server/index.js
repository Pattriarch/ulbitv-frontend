const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const jsonServer = require('json-server');

const options = {
	key: fs.readFileSync(path.resolve(__dirname, 'certs', 'key.pem')),
	cert: fs.readFileSync(path.resolve(__dirname, 'certs', 'cert.pem')),
};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// Имитация задержки
server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

server.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;
		const db = JSON.parse(
			fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
		);
		const { users = [] } = db;

		const userFromDb = users.find(
			(user) => user.username === username && user.password === password,
		);

		if (userFromDb) {
			return res.json({
				id: userFromDb.id,
				username: userFromDb.username,
				roles: userFromDb.roles,
				avatar: userFromDb.avatar,
				features: userFromDb.features,
				jsonSettings: userFromDb.jsonSettings,
			});
		}

		return res.status(403).json({ message: 'User not found' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
});

// Проверка авторизацию пользователя
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' });
	}
	next();
});

server.use(router);

const httpsServer = https.createServer(options, server);
const httpServer = http.createServer(server);

const PORT = 8443;
const HTTP_PORT = 8000;

// Запуск сервера
httpsServer.listen(PORT, () => {
	console.log(`Server is running on ${PORT} port`);
});
httpServer.listen(HTTP_PORT, () => {
	console.log(`Server is running on ${HTTP_PORT} port`);
});
