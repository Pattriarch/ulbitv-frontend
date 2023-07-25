export const searchArticles = (text: string) => {
    cy.getByTestId('ArticlesDetailsPageFilters.Input').type(text);
}

declare global {
    namespace Cypress {
        interface Chainable {
            searchArticles(text: string): Chainable<void>;
        }
    }
}
