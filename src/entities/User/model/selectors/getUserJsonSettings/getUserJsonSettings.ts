import { JsonSettings } from '../../types/jsonSettings';

import { Theme } from '@/shared/const/theme';
import { buildSelector } from '@/shared/lib/store';

const defaultJsonSettings: JsonSettings = {
	theme: Theme.DARK,
	isFirstVisit: true,
	isArticlesPageWasOpened: false,
};

export const [useJsonSettings, getJsonSettings] = buildSelector(
	(state) => state?.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
