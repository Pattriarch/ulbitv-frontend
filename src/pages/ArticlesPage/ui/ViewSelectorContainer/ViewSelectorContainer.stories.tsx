import type { Meta, StoryObj } from '@storybook/react';

import { ViewSelectorContainer } from './ViewSelectorContainer';

const meta: Meta<typeof ViewSelectorContainer> = {
	title: 'shared/ViewSelectorContainer',
	component: ViewSelectorContainer,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ViewSelectorContainer>;

export const Primary: Story = {
	args: {},
};
