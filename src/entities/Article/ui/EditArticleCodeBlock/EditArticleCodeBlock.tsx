import { type HTMLAttributes, memo, useState } from 'react';

import { type ArticleCodeBlock } from '../../model/types/article';

import CancelIcon from '@/shared/assets/icons/cancel-512-512.svg';
import EditIcon from '@/shared/assets/icons/edit-512-512.svg';
import MarkIcon from '@/shared/assets/icons/mark-512-512.svg';
import MoveIcon from '@/shared/assets/icons/move-512-512.svg';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { Textarea } from '@/shared/ui/deprecated/Textarea/Textarea';
import { Code } from '@/shared/ui/redesigned/Code';

import cls from './EditArticleCodeBlock.module.scss';

interface EditArticleCodeBlockProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	block: ArticleCodeBlock;
	onChangeBlockState: (editedBlock: ArticleCodeBlock) => void;
}

export const EditArticleCodeBlock = memo((props: EditArticleCodeBlockProps) => {
	const { className, block, onChangeBlockState, ...otherProps } = props;

	const [codeBlock, setCodeBlock] = useState(block);
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const onClickEditIcon = () => setIsEdit(true);

	const onClickCancelIcon = () => {
		setIsEdit(false);
		setCodeBlock(block);
	};

	const onClickMarkIcon = () => {
		setIsEdit(false);
		onChangeBlockState(codeBlock);
	};

	const onChangeCode = (value: string) => {
		setCodeBlock(() => {
			return {
				...block,
				code: value,
			};
		});
	};

	const mods: Mods = {
		[cls.draggable]: !isEdit,
	};

	if (isEdit) {
		return (
			<div
				className={classNames(cls.EditArticleCodeBlock, mods, [
					className,
				])}
				draggable={!isEdit}
				{...otherProps}
			>
				<MarkIcon
					onClick={onClickMarkIcon}
					className={classNames(cls.icon, {}, [cls.markIcon])}
				/>
				<CancelIcon
					onClick={onClickCancelIcon}
					className={classNames(cls.icon, {}, [cls.cancelIcon])}
				/>
				<Textarea
					className={cls.title}
					theme={'outlined'}
					value={codeBlock.code}
					onChange={onChangeCode}
				/>
			</div>
		);
	}

	return (
		<div
			className={classNames(cls.EditArticleCodeBlock, mods, [className])}
			draggable={!isEdit}
			{...otherProps}
		>
			<EditIcon
				onClick={onClickEditIcon}
				className={classNames(cls.icon, {}, [cls.editIcon])}
			/>
			<MoveIcon className={classNames(cls.icon, {}, [cls.moveIcon])} />
			<Code withCopyIcon={false} text={codeBlock.code} />
		</div>
	);
});
