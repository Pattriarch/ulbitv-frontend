import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from '../..';

import { EditArticleBlock } from './EditArticleBlock';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { getStorybookImage } from '@/shared/lib/tests/getStorybookImage/getStorybookImage';

const meta: Meta<typeof EditArticleBlock> = {
	title: 'entities/Article/EditArticleBlock',
	component: EditArticleBlock,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditArticleBlock>;

const textBlock = {
	id: '1',
	order: 1,
	type: ArticleBlockType.TEXT,
	title: 'Текст',
	paragraphs: ['Параграф 1', 'Параграф 2', 'Параграф 3'],
} as ArticleTextBlock;

const imageBlock = {
	id: '2',
	order: 2,
	type: ArticleBlockType.IMAGE,
	title: 'Текст',
	src: getStorybookImage(),
} as ArticleImageBlock;

const codeBlock = {
	id: '3',
	order: 3,
	type: ArticleBlockType.CODE,
	code: '<div>Example</div>',
} as ArticleCodeBlock;

export const TextEditBlock: Story = {
	args: {
		block: textBlock,
	},
};

export const TextEditBlockRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		block: textBlock
	},
};

export const ImageEditBlock: Story = {
	args: {
		block: imageBlock
	},
};

export const ImageEditBlockRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		block: imageBlock
	},
};

export const CodeEditBlock: Story = {
	args: {
		block: codeBlock
	},
};

export const CodeEditBlockRedesigned: Story = {
	decorators: [NewDesignDecorator],
	args: {
		block: codeBlock
	},
};
