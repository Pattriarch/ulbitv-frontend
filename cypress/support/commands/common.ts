import { AuthData } from '../../../src/entities/User';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username: string = 'testuser', password: string = '123') => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password
        }
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            // eslint-disable-next-line @typescript-eslint/method-signature-style
            login(username?: string, password?: string): Chainable<AuthData>;

            // eslint-disable-next-line @typescript-eslint/method-signature-style
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
