import type { Meta, StoryObj } from '@storybook/react';

import EyeIcon from '../../../assets/icons/eye-20-20.svg';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
	title: 'shared/deprecated/IconDeprecated',
	component: Icon,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Normal: Story = {
	args: {
		Svg: EyeIcon,
	},
};

export const Inverted: Story = {
	args: {
		Svg: EyeIcon,
		inverted: true,
	},
};
