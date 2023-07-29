import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
	title: 'shared/Flex',
	component: Flex,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
	args: {
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const RowGap4: Story = {
	args: {
		gap: '4',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const RowGap8: Story = {
	args: {
		gap: '8',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const RowGap16: Story = {
	args: {
		gap: '16',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const RowGap32: Story = {
	args: {
		gap: '32',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const Column: Story = {
	args: {
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const Column4: Story = {
	args: {
		gap: '4',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const Column8: Story = {
	args: {
		gap: '8',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const Column16: Story = {
	args: {
		gap: '16',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const Column32: Story = {
	args: {
		gap: '32',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const ColumnAlignStart: Story = {
	args: {
		align: 'start',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const ColumnAlignEnd: Story = {
	args: {
		align: 'end',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const ColumnJustifyStart: Story = {
	args: {
		justify: 'start',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};

export const ColumnJustifyEnd: Story = {
	args: {
		align: 'end',
		direction: 'column',
		children: (
			<>
				<div>first</div>
				<div>second</div>
				<div>third</div>
				<div>fourth</div>
			</>
		),
	},
};
