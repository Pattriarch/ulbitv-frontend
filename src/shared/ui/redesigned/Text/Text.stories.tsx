import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
	title: 'shared/TextRedesigned',
	component: Text,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Normal: Story = {
	args: {
		title: 'Title lorem ipsun',
		text: 'Description description lorem ipsun',
	},
};

export const Error: Story = {
	args: {
		title: 'Title lorem ipsun',
		text: 'Description description lorem ipsun',
		variant: 'error',
	},
};

export const Accent: Story = {
	args: {
		title: 'Title lorem ipsun',
		text: 'Description description lorem ipsun',
		variant: 'accent',
	},
};

export const onlyTitle: Story = {
	args: {
		title: 'Title lorem ipsun',
	},
};

export const onlyText: Story = {
	args: {
		text: 'Description description lorem ipsun',
	},
};

export const SizeS: Story = {
	args: {
		title: 'Title lorem ipsun',
		text: 'Description description lorem ipsun',
		size: 's',
	},
};

export const SizeM: Story = {
	args: {
		title: 'Title lorem ipsun',
		text: 'Description description lorem ipsun',
		size: 'm',
	},
};

export const SizeL: Story = {
	args: {
		title: 'Title lorem ipsun',
		text: 'Description description lorem ipsun',
		size: 'l',
	},
};
