import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import fetchMock from 'jest-fetch-mock';

beforeAll(() => {
	console.error = jest.fn();
	console.warn = jest.fn();
});

// Сетап fetchMock

fetchMock.enableMocks();
