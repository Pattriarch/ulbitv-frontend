import { type StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: StoryFn): JSX.Element => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
);
