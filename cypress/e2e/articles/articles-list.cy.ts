describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles')
    })
  });
  it('Статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList')
        .should('exist');
    cy.getByTestId('ArticleListItem')
        .should('have.length.greaterThan', 3);
  });
  it('Статьи фильтруются по категории', () => {
    cy.getByTestId('Card.ECONOMICS').click();
    cy.getByTestId('ArticleListItem')
        .should('have.length.greaterThan', 1);
  });
  it('Поиск по статьям работает', () => {
    cy.searchArticles('Экономическая');
    cy.getByTestId('ArticleListItem')
        .should('have.length.greaterThan', 1);
  })
})
