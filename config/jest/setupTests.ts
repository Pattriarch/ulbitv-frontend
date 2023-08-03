import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

// Глобальный мок localStorage

const localStorageMock = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	clear: jest.fn(),
	removeItem: jest.fn(),
	key: jest.fn().mockReturnValue(null),
	length: 0,
};

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock
});
