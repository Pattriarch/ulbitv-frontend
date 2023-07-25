export const searchArticles = (text: string) => {
  cy.getByTestId("ArticlesDetailsPageFilters.Input").type(text);
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      searchArticles(text: string): Chainable<void>;
    }
  }
}
