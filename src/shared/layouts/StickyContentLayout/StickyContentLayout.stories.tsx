import type { Meta, StoryObj } from '@storybook/react';

import { StickyContentLayout } from './StickyContentLayout';

const meta: Meta<typeof StickyContentLayout> = {
	title: 'shared/layouts/StickyContentLayout',
	component: StickyContentLayout,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StickyContentLayout>;

export const Normal: Story = {};
