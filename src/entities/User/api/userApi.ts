import { User } from '..';
import { JsonSettings } from '../model/types/jsonSettings';

import { rtkApi } from '@/shared/api/rtkApi';

interface SetJsonSettingsArg {
	userId: string;
	jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
			query: ({ userId, jsonSettings }) => ({
				url: `/users/${userId}`,
				method: 'PATCH',
				body: {
					jsonSettings,
				},
			}),
		}),
	}),
});

export const setJsonSettingsMutation =
	userApi.endpoints.setJsonSettings.initiate;