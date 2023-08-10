import { userApi } from './userApi';

import { Theme } from '@/shared/const/theme';
import { setupApiStore } from '@/shared/lib/tests/setupApiStore/setupApiStore';

describe('useApi', () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it('request is correct', () => {
		const storeRef = setupApiStore(userApi);
		fetchMock.mockResponse(JSON.stringify({}));

		return storeRef.store
			.dispatch<any>(userApi.endpoints.getUserDataById.initiate('1'))
			.then(() => {
				expect(fetchMock).toBeCalledTimes(1);
				const { method, url } = fetchMock.mock.calls[0][0] as Request;

				expect(method).toBe('GET');
				expect(url).toBe(`${__API__}/users/1`);
			});
	});

	it('successful response', () => {
		const storeRef = setupApiStore(userApi);
		fetchMock.mockResponse(JSON.stringify({ id: '1', username: 'test' }));

		return storeRef.store
			.dispatch<any>(userApi.endpoints.getUserDataById.initiate('1'))
			.then((action: any) => {
				const { status, data, isSuccess } = action;
				expect(status).toBe('fulfilled');
				expect(isSuccess).toBe(true);
				expect(data).toStrictEqual({ id: '1', username: 'test' });
			});
	});

	it('unsuccessful response', () => {
		const storeRef = setupApiStore(userApi);
		fetchMock.mockReject(new Error('Internal Server Error'));

		return storeRef.store
			.dispatch<any>(userApi.endpoints.getUserDataById.initiate('1'))
			.then((action: any) => {
				const {
					status,
					error: { error },
					isError,
				} = action;
				expect(status).toBe('rejected');
				expect(isError).toBe(true);
				expect(error).toBe('Error: Internal Server Error');
			});
	});
});

describe('', () => {
	test('request is correct', () => {
		const storeRef = setupApiStore(userApi);
		fetchMock.mockResponse(JSON.stringify({}));

		return storeRef.store
			.dispatch<any>(
				userApi.endpoints.setJsonSettings.initiate({
					userId: '1',
					jsonSettings: { theme: Theme.TAN },
				}),
			)
			.then(() => {
				expect(fetchMock).toBeCalledTimes(1);
				const request = fetchMock.mock.calls[0][0] as Request;
				const { method, url } = request;

				void request.json().then((data) => {
					expect(data).toStrictEqual({
						jsonSettings: { theme: Theme.TAN },
					});
				});

				expect(method).toBe('PATCH');
				expect(url).toBe(`${__API__}/users/1`);
			});
	});
	test('successful response', () => {
		const storeRef = setupApiStore(userApi);
		fetchMock.mockResponse(
			JSON.stringify({ jsonSettings: { theme: Theme.TAN } }),
		);

		return storeRef.store
			.dispatch<any>(
				userApi.endpoints.setJsonSettings.initiate({
					userId: '1',
					jsonSettings: { theme: Theme.TAN },
				}),
			)
			.then((action: any) => {
				const { data } = action;
				expect(data).toStrictEqual({
					jsonSettings: { theme: Theme.TAN },
				});
			});
	});
	test('unsuccessful response', () => {
		const storeRef = setupApiStore(userApi);
		fetchMock.mockReject(new Error('Internal Server Error'));

		return storeRef.store
			.dispatch<any>(
				userApi.endpoints.setJsonSettings.initiate({
					userId: '1',
					jsonSettings: { theme: Theme.TAN },
				}),
			)
			.then((action: any) => {
				const {
					error: { status, error },
				} = action;
				expect(status).toBe('FETCH_ERROR');
				expect(error).toBe('Error: Internal Server Error');
			});
	});
});

export {};
