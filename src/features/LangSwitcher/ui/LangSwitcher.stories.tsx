import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LangSwitcher> = {
	title: 'features/LangSwitcher',
	component: LangSwitcher,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};

export const Short: Story = {
	args: {
		short: true,
	},
};

export const ShortRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		short: true,
	},
};
