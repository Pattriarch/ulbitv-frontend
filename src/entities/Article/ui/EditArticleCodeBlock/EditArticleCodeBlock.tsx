import { type HTMLAttributes, memo } from 'react';

import { type ArticleCodeBlock } from '../../model/types/article';

import { ToggleFeatures } from '@/shared/lib/features';
import { Textarea as TextareaDeprecated } from '@/shared/ui/deprecated/Textarea';
import { Code } from '@/shared/ui/redesigned/Code';
import { Textarea } from '@/shared/ui/redesigned/Textarea';

import cls from './EditArticleCodeBlock.module.scss';

interface EditArticleCodeBlockProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	isEdit: boolean;
	block: ArticleCodeBlock;
	onChangeBlockState: (editedBlock: ArticleCodeBlock) => void;
	setEditBlock: (block: ArticleCodeBlock) => void;
	editBlock: ArticleCodeBlock;
}

export const EditArticleCodeBlock = memo((props: EditArticleCodeBlockProps) => {
	const {
		className,
		isEdit,
		block,
		editBlock,
		onChangeBlockState,
		setEditBlock,
		...otherProps
	} = props;

	const onChangeCode = (value: string) => {
		setEditBlock({
			...editBlock,
			code: value,
		});
	};

	if (isEdit) {
		return (
			<>
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<Textarea
							className={cls.title}
							variant={'outlined'}
							value={editBlock.code}
							onChange={onChangeCode}
						/>
					}
					off={
						<TextareaDeprecated
							className={cls.title}
							theme={'outlined'}
							value={editBlock.code}
							onChange={onChangeCode}
						/>
					}
				/>
			</>
		);
	}

	return (
		<>
			<Code withCopyIcon={false} text={editBlock.code} />
		</>
	);
});
