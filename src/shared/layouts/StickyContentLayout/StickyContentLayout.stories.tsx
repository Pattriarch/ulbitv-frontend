import type { Meta, StoryObj } from '@storybook/react';

import { StickyContentLayout } from './StickyContentLayout';

const meta: Meta<typeof StickyContentLayout> = {
	title: 'shared/StickyContentLayout',
	component: StickyContentLayout,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StickyContentLayout>;

export const Primary: Story = {
	args: {},
};
