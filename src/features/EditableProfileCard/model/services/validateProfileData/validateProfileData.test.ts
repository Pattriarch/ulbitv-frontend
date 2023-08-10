import { ValidateProfileError } from '../../consts/consts';

import { validateProfileData } from './validateProfileData';

import { PROFILE_FIXTURE } from '@/entities/Profile/testing';

describe('validateProfileData', () => {
	test('success', async () => {
		const result = validateProfileData(PROFILE_FIXTURE);

		expect(result).toEqual([]);
	});

	test('without first and last name', async () => {
		const result = validateProfileData({
			...PROFILE_FIXTURE,
			firstName: '',
			lastName: '',
		});

		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});

	test('incorrect age', async () => {
		const result = validateProfileData({
			...PROFILE_FIXTURE,
			age: undefined,
		});

		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
	});

	test('incorrect country', async () => {
		const result = validateProfileData({
			...PROFILE_FIXTURE,
			country: undefined,
		});

		expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
	});

	test('incorrect all', async () => {
		const result = validateProfileData({});

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
		]);
	});
});
