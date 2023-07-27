import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
	title: 'entities/Country/CountrySelect',
	component: CountrySelect,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Normal: Story = {
	args: {},
};
