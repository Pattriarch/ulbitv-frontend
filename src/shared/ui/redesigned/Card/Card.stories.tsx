import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
	title: 'shared/Card',
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
		variant: 'outlined',
	},
};

export const Light: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		variant: 'light',
	},
};
