let currentArticleId = '';

// Флоу: создали статью - выполнили тесты - удалили статью
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${currentArticleId}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекомендаций', () => {
      cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
      // дожидаемся загрузки информации о статье
      cy.getByTestId('ArticleDetails.Info');
      // скроллим к комментарию
      cy.getByTestId('AddCommentForm').scrollIntoView();
      cy.addComment('text');
      cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку', () => {
      // дожидаемся загрузки инфорации о статье
      cy.getByTestId('ArticleDetails.Info');
      cy.getByTestId('RatingCard').scrollIntoView();
      cy.setRate(4, 'feedback');
      // получаем количество выбранных звезд
      cy.get('[data-selected=true]').should('have.length', 4);
    });
})
