import { type Meta, type StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
	title: 'features/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs'],
	decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Normal: Story = {};

export const NormalRedesigned: Story = {
	decorators: [NewDesignDecorator],
};
