import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={state}>
        <Story/>
    </StoreProvider>
);
