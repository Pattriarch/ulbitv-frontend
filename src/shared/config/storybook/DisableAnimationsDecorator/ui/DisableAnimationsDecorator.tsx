import { StoryFn } from '@storybook/react';
import React from 'react';

import { isLokiRunning } from '../lib/isLokiRunning/isLokiRunning';

export const DisableAnimationsContext = React.createContext(false);

export const DisabledAnimationsProvider = (StoryComponent: StoryFn) => (
	<DisableAnimationsContext.Provider value={isLokiRunning()}>
		<StoryComponent />
	</DisableAnimationsContext.Provider>
);

