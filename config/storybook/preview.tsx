import type { Preview } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

import { Theme } from '@/shared/const/theme';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		layout: 'fullscreen',
		themes: {
			default: 'light',
			list: [
				{ name: 'light', class: ['app', Theme.LIGHT], color: '#e8e8ea' },
				{ name: 'dark', class: ['app', Theme.DARK], color: '#090949' },
				{ name: 'tan', class: ['app', Theme.TAN], color: '#483c32' }
			]
		}
	},
	decorators: [
		StyleDecorator,
		RouterDecorator,
		SuspenseDecorator
	]
};

export default preview;
