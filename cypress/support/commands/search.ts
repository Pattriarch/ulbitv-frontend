export const searchArticles = (text: string) => {
	cy.getByTestId('ArticlesPageFilters.Input').type(text);
};

declare global {
	namespace Cypress {
		interface Chainable {
			searchArticles(text: string): Chainable<void>;
		}
	}
}
