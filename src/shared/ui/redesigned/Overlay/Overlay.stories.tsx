import type { Meta, StoryObj } from '@storybook/react';

import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
	title: 'shared/redesigned/Overlay',
	component: Overlay,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Normal: Story = {};
