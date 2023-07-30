import type { Meta, StoryObj } from '@storybook/react';

import { AdditionalInfoContainer } from './AdditionalInfoContainer';

const meta: Meta<typeof AdditionalInfoContainer> = {
	title: 'shared/AdditionalInfoContainer',
	component: AdditionalInfoContainer,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdditionalInfoContainer>;

export const Primary: Story = {
	args: {},
};
