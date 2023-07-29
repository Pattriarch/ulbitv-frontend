import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;

export const Normal: Story = {
    args: {}
};
