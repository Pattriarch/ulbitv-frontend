import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@/features/AuthByUsername';
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { profileReducer } from '@/features/editableProfileCard';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (Story: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story/>
    </StoreProvider>
);
