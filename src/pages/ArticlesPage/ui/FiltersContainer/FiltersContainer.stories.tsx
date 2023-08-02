import type { Meta, StoryObj } from '@storybook/react';
import { FiltersContainer } from './FiltersContainer';

const meta: Meta<typeof FiltersContainer> = {
	title: 'shared/FiltersContainer',
	component: FiltersContainer,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FiltersContainer>;

export const Primary: Story = {
	args: {},
};
