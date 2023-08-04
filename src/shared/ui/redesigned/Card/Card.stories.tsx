import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text/Text';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
	title: 'shared/redesigned/Card',
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

export const Padding0: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		padding: '0',
	},
};

export const Padding8: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		padding: '8',
	},
};

export const Padding16: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		padding: '16',
	},
};

export const Padding24: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		padding: '24',
	},
};

export const BorderNormal: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		border: 'normal',
	},
};

export const BorderPartial: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		border: 'partial',
	},
};

export const BorderRound: Story = {
	args: {
		children: <Text title={'test'} text={'test text'} />,
		border: 'round',
	},
};
