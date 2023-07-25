export const setRate = (starCount = 5, feedback = 'feedback') => {
	// нажимаем на нужную нам звезду
	cy.getByTestId(`StarRating.${starCount}`).click();
	// открылась модалка, пишем отзыв
	cy.getByTestId('RatingCard.Input').type(feedback);
	// отправляем
	cy.getByTestId('RatingCard.Send').click();
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			// eslint-disable-next-line @typescript-eslint/method-signature-style
			setRate(starCount: number, feedback?: string): Chainable<void>;
		}
	}
}
