import { StoryContext, type StoryFn } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Loader } from '@/shared/ui/deprecated/Loader';

import i18nForTest from '../../i18n/i18nForTest';

export const I18nDecorator = (
	Story: StoryFn,
	context: StoryContext,
): JSX.Element => {
	const { locale } = context.globals;

	useEffect(() => {
		void i18nForTest.changeLanguage(locale);
	}, [locale]);

	return (
		<Suspense fallback={<Loader />}>
			<I18nextProvider i18n={i18nForTest}>
				<Story />
			</I18nextProvider>
		</Suspense>
	);
};
