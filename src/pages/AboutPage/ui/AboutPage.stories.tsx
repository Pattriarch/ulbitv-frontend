// import type { ComponentMeta, ComponentStory, Meta, StoryObj } from '@storybook/react';
// import 'app/styles/index.scss';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
// import AboutPage from './AboutPage';
//
// export default {
//     title: 'pages/AboutPage',
//     component: AboutPage,
//     argTypes: {
//         backgroundColor: { control: 'color' }
//     }
// } as ComponentMeta<typeof AboutPage>;
//
// const Template: ComponentStory<typeof AboutPage> = () => <AboutPage/>;
//
// export const Normal = Template.bind({});
// Normal.args = {};
//
// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Normal: Story = {
    args: {}
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {}
};
