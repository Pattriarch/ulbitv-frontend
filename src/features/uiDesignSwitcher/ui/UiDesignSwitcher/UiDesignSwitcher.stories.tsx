import type { Meta, StoryObj } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;

export const Normal: Story = {

};

export const NormalRedesigned: Story = {
    decorators: [NewDesignDecorator]
};
