import '@/app/styles/index.scss';
import { type StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (Story: StoryFn): JSX.Element => (
	<Suspense>
		<Story/>
	</Suspense>
);
