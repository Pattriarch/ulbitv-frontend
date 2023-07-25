import { Article } from '../../../src/entities/Article';

const defaultArticle = {
	title: 'Test 15',
	subtitle: 'Что добавили нового в Kotlin 2023',
	img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kotlin_logo.svg/2560px-Kotlin_logo.svg.png',
	views: 667,
	createdAt: '29.02.2022',
	userId: '1',
	type: ['IT'],
	blocks: [],
};

export const createArticle = (article?: Article) => {
	return cy
		.request({
			method: 'POST',
			url: 'http://localhost:8000/articles',
			headers: { Authorization: 'test' },
			body: article ?? defaultArticle,
		})
		.then((resp) => resp.body);
};

export const removeArticle = (articleId: number) => {
	return cy.request({
		method: 'DELETE',
		url: `http://localhost:8000/articles/${articleId}`,
		headers: { Authorization: 'test' },
	});
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			// eslint-disable-next-line @typescript-eslint/method-signature-style
			createArticle(article?: Article): Chainable<Article>;
			// eslint-disable-next-line @typescript-eslint/method-signature-style
			removeArticle(articleId: string): Chainable<void>;
		}
	}
}
