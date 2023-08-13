import { StoryFn } from '@storybook/react';
import React from 'react';

import { isLokiRunning } from './isLokiRunning';

export const DisableAnimationsContext = React.createContext(false);

export const DisabledAnimationsDecorator = (StoryComponent: StoryFn) => (
	<DisableAnimationsContext.Provider value={isLokiRunning()}>
		<StoryComponent />
	</DisableAnimationsContext.Provider>
);

