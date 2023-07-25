describe("Пользователь заходит на страницу со списком статей", () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit("articles");
    });
  });
  describe("Работа с API", () => {
    it("Статьи успешно подгружаются", () => {
      cy.getByTestId("ArticleList").should("exist");
      cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
    });
    it("Статьи фильтруются по категории", () => {
      cy.getByTestId("Card.ECONOMICS").click();
      cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 1);
    });
    it("Поиск по статьям работает", () => {
      cy.searchArticles("Экономическая");
      cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 1);
    });
    it.skip("Пример заскипанного теста", () => {
      cy.getByTestId("asdasdasdasd").should("exist");
    });
  });
  describe("Работа на фикстурах", () => {
    it("На стабах (фикстурах)", () => {
      cy.intercept("GET", "**/articles?*", { fixture: "articles.json" });
      cy.getByTestId("ArticleList").should("exist");
      cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
    });
  });
});
