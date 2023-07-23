import { type StoryFn } from '@storybook/react';

// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>
);
