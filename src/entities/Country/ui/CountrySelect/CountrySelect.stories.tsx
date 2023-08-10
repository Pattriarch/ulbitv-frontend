import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof CountrySelect> = {
	title: 'entities/Country/CountrySelect',
	component: CountrySelect,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
