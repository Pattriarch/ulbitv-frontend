import { type HTMLAttributes, memo, useCallback, useState } from 'react';

import { ArticleBlockType } from '../../consts/articleConsts';
import {
	ArticleBlock,
	ArticleCodeBlock,
	ArticleImageBlock,
	ArticleTextBlock,
} from '../../model/types/article';
import cls from '../EditArticleBlock/EditArticleBlock.module.scss';
import { EditArticleCodeBlock } from '../EditArticleCodeBlock/EditArticleCodeBlock';
import { EditArticleImageBlock } from '../EditArticleImageBlock/EditArticleImageBlock';
import { EditArticleTextBlock } from '../EditArticleTextBlock/EditArticleTextBlock';

import CancelIcon from '@/shared/assets/icons/cancel-512-512.svg';
import EditIcon from '@/shared/assets/icons/edit-512-512.svg';
import MarkIcon from '@/shared/assets/icons/mark-512-512.svg';
import MoveIcon from '@/shared/assets/icons/move-512-512.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import PlusIcon from '@/shared/assets/icons/plus-512-512.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface EditArticleBlockProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	block: ArticleBlock;
	onChangeBlockState: (editedBlock: ArticleBlock) => void;
}

export const EditArticleBlock = memo((props: EditArticleBlockProps) => {
	const { className, block, onChangeBlockState, ...otherProps } = props;

	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [editBlock, setEditBlock] = useState(block);

	const renderBlock = useCallback(
		(block: ArticleBlock) => {
			switch (block.type) {
				case ArticleBlockType.CODE:
					return (
						<EditArticleCodeBlock
							{...otherProps}
							className={className}
							block={block}
							onChangeBlockState={onChangeBlockState}
							isEdit={isEdit}
							editBlock={editBlock as ArticleCodeBlock}
							setEditBlock={setEditBlock}
						/>
					);
				case ArticleBlockType.IMAGE:
					return (
						<EditArticleImageBlock
							{...otherProps}
							className={className}
							block={block}
							onChangeBlockState={onChangeBlockState}
							isEdit={isEdit}
							editBlock={editBlock as ArticleImageBlock}
							setEditBlock={setEditBlock}
						/>
					);
				case ArticleBlockType.TEXT:
					return (
						<EditArticleTextBlock
							{...otherProps}
							className={className}
							block={block}
							onChangeBlockState={onChangeBlockState}
							isEdit={isEdit}
							editBlock={editBlock as ArticleTextBlock}
							setEditBlock={setEditBlock}
						/>
					);
				default:
					return null;
			}
		},
		[className, editBlock, isEdit, onChangeBlockState, otherProps],
	);

	const onClickEditIcon = () => setIsEdit(true);

	const onClickCancelIcon = () => {
		setIsEdit(false);
		setEditBlock(block);
	};

	const onClickMarkIcon = () => {
		setIsEdit(false);
		onChangeBlockState(editBlock);
	};

	const mods: Mods = {
		[cls.draggable]: !isEdit,
	};

	// todo иконки либо сделать обернуть в Button, либо сделать кликабельной Icon
	const icons = (isEdit: boolean) => {
		return isEdit ? (
			<>
				<Icon
					width={20}
					height={20}
					clickable
					onClick={onClickMarkIcon}
					className={classNames(cls.icon, {}, [cls.markIcon])}
					Svg={MarkIcon}
				/>
				<Icon
					width={20}
					height={20}
					clickable
					onClick={onClickCancelIcon}
					className={classNames(cls.icon, {}, [cls.cancelIcon])}
					Svg={CancelIcon}
				/>
			</>
		) : (
			<>
				<Icon
					width={20}
					height={20}
					clickable
					onClick={onClickEditIcon}
					className={classNames(cls.icon, {}, [cls.editIcon])}
					Svg={EditIcon}
				/>
				<Icon
					width={20}
					height={20}
					className={classNames(cls.icon, {}, [cls.moveIcon])}
					Svg={MoveIcon}
				/>
			</>
		);
	};

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Card
					className={classNames(
						cls.EditArticleBlockRedesigned,
						mods,
						[className],
					)}
					draggable={!isEdit}
					border={'partial'}
					{...otherProps}
				>
					{icons(isEdit)}
					{renderBlock(block)}
				</Card>
			}
			off={
				<div
					className={classNames(cls.EditArticleBlock, mods, [
						className,
					])}
					draggable={!isEdit}
					{...otherProps}
				>
					{icons(isEdit)}
					{renderBlock(block)}
				</div>
			}
		/>
	);
});
