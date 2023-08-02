export const setRate = (starCount = 5, feedback = 'feedback') => {
	// нажимаем на нужную нам звезду
	cy.getByTestId(`StarRating.${starCount}`).click();
	// открылась модалка, пишем отзыв
	cy.getByTestId('RatingCard.Input').type(feedback);
	// отправляем
	cy.getByTestId('RatingCard.Send').click();
};

declare global {
	namespace Cypress {
		interface Chainable {
			setRate(starCount: number, feedback?: string): Chainable<void>;
		}
	}
}
