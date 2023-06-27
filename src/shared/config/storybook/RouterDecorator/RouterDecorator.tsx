import { BrowserRouter } from 'react-router-dom';
import { type StoryFn } from '@storybook/react';

export const RouterDecorator = (Story: StoryFn): JSX.Element => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
);
