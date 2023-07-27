import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from '../..';

import { EditArticleBlock } from './EditArticleBlock';

import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

const meta: Meta<typeof EditArticleBlock> = {
	title: 'entities/Article/EditArticleBlock',
	component: EditArticleBlock,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditArticleBlock>;

export const TextEditBlock: Story = {
	args: {
		block: {
			id: '1',
			order: 1,
			type: ArticleBlockType.TEXT,
			title: 'Текст',
			paragraphs: ['Параграф 1', 'Параграф 2', 'Параграф 3'],
		},
	},
};

export const ImageEditBlock: Story = {
	args: {
		block: {
			id: '2',
			order: 2,
			type: ArticleBlockType.IMAGE,
			title: 'Текст',
			src: getStorybookImage(),
		},
	},
};

export const CodeEditBlock: Story = {
	args: {
		block: {
			id: '3',
			order: 3,
			type: ArticleBlockType.CODE,
			code: '<div>Example</div>',
		},
	},
};
