import { type StoryFn } from '@storybook/react';

export const PaddingDecorator = (Story: StoryFn): JSX.Element => (
	<div style={{ padding: '1rem' }}>
		<Story />
	</div>
);
