import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
    title: 'shared/Textarea',
    component: Textarea,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
    args: {}
};
