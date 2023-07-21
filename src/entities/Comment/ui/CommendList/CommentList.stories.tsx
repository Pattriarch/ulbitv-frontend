import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hey!',
                user: {
                    id: '1',
                    username: 'Misha'
                }
            },
            {
                id: '2',
                text: 'hey again!',
                user: {
                    id: '2',
                    username: 'Dima'
                }
            }
        ]
    }
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        comments: [
            {
                id: '1',
                text: 'hey!',
                user: {
                    id: '1',
                    username: 'Misha'
                }
            },
            {
                id: '2',
                text: 'hey again!',
                user: {
                    id: '2',
                    username: 'Dima'
                }
            }
        ]
    }
};

export const PrimaryLoading: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hey!',
                user: {
                    id: '1',
                    username: 'Misha'
                }
            },
            {
                id: '2',
                text: 'hey again!',
                user: {
                    id: '2',
                    username: 'Dima'
                }
            }
        ],
        isLoading: true
    }
};

export const DarkLoading: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        comments: [
            {
                id: '1',
                text: 'hey!',
                user: {
                    id: '1',
                    username: 'Misha'
                }
            },
            {
                id: '2',
                text: 'hey again!',
                user: {
                    id: '2',
                    username: 'Dima'
                }
            }
        ],
        isLoading: true
    }
};
