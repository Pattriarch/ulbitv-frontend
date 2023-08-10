import type { Meta, StoryObj } from '@storybook/react';

import { ScrollToTopButton } from './ScrollToTopButton';

const meta: Meta<typeof ScrollToTopButton> = {
	title: 'features/ScrollToTopButton',
	component: ScrollToTopButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollToTopButton>;

export const Normal: Story = {};
