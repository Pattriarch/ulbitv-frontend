import type { Preview } from '@storybook/react';

import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator/I18nDecorator';
import { PaddingDecorator } from '../../src/shared/config/storybook/PaddingDecorator/PaddingDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

import { DisabledAnimationsDecorator } from '@/shared/config/storybook/DisableAnimationsDecorator/DisableAnimationsDecorator';
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { Theme } from '@/shared/const/theme';

const preview: Preview = {
	globalTypes: {
		locale: {
			name: 'Locale',
			description: 'Internationalization locale',
			toolbar: {
				icon: 'globe',
				items: [
					{ value: 'ru', title: 'Русский' },
					{ value: 'en', title: 'English' },
				],
				showName: true,
			},
		},
	},
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		layout: 'fullscreen',
		themes: {
			default: 'light',
			list: [
				{
					name: 'light',
					class: ['app', Theme.LIGHT],
					color: '#e8e8ea',
				},
				{ name: 'dark', class: ['app', Theme.DARK], color: '#090949' },
				{ name: 'tan', class: ['app', Theme.TAN], color: '#483c32' },
				{ name: 'lake', class: ['app', Theme.LAKE], color: '#204051' },
			],
		},
	},
	decorators: [
		DisabledAnimationsDecorator,
		StyleDecorator,
		RouterDecorator,
		SuspenseDecorator,
		PaddingDecorator,
		I18nDecorator,
		FeatureFlagsDecorator({}),
	],
};

export default preview;
