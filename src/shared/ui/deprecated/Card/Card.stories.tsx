import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card, CardTheme } from './Card';

const meta: Meta<typeof Card> = {
	title: 'shared/deprecated/CardDeprecated',
	component: Card,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
	},
};

export const Outlined: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		theme: CardTheme.OUTLINED,
	},
};
