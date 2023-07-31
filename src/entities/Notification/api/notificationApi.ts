import { type Notification } from '../model/types/notification';

import { rtkApi } from '@/shared/api/rtkApi';

const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getNotifications: build.query<Notification[], number>({
			query: (userId) => ({
				url: '/notifications',
				params: {
					userId,
				},
			}),
		}),
	}),
});
export const useNotifications = notificationApi.useGetNotificationsQuery;
