import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { type ProfileSchema } from '../types/editableProfileCardSchema';

import { profileActions, profileReducer } from './profileSlice';
import { PROFILE_FIXTURE } from '@/entities/Profile/testing';

describe('profileSlice', () => {
	test('test set readonly', () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: false,
		};
		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.setReadonly(true),
			),
		).toEqual({ readonly: true });
	});

	test('test update profile', () => {
		const state: DeepPartial<ProfileSchema> = {
			form: { username: '123' },
		};
		expect(
			profileReducer(
				state as ProfileSchema,
				profileActions.updateProfile({ username: 'test' }),
			),
		).toEqual({
			form: { username: 'test' },
		});
	});

	test('test cancel edit', () => {
		const state: DeepPartial<ProfileSchema> = {
			data: PROFILE_FIXTURE,
			form: { username: '' },
		};
		expect(
			profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
		).toEqual({
			readonly: true,
			validateErrors: undefined,
			data: PROFILE_FIXTURE,
			form: PROFILE_FIXTURE,
		});
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.SERVER_ERROR],
		};
		expect(
			profileReducer(state as ProfileSchema, updateProfileData.pending),
		).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test('test update profile service fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};
		expect(
			profileReducer(
				state as ProfileSchema,
				updateProfileData.fulfilled(PROFILE_FIXTURE, ''),
			),
		).toEqual({
			isLoading: false,
			validateErrors: undefined,
			readonly: true,
			form: PROFILE_FIXTURE,
			data: PROFILE_FIXTURE,
		});
	});
});
