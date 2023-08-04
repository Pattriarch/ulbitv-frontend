import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof CurrencySelect> = {
	title: 'entities/Currency/CurrencySelect',
	component: CurrencySelect,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
