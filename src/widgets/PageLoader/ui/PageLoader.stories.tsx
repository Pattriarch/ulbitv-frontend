// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import '@/app/styles/index.scss';
import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
	title: 'widgets/PageLoader',
	component: PageLoader,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Normal: Story = {
	args: {},
};
