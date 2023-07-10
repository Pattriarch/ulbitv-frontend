import { type HTMLAttributes, memo, type MouseEvent, useState } from 'react';

import { type ArticleTextBlock } from '../../model/types/article';

import CancelIcon from '@/shared/assets/icons/cancel-512-512.svg';
import EditIcon from '@/shared/assets/icons/edit-512-512.svg';
import MarkIcon from '@/shared/assets/icons/mark-512-512.svg';
import MinusIcon from '@/shared/assets/icons/minus-512-512.svg';
import MoveIcon from '@/shared/assets/icons/move-512-512.svg';
import PlusIcon from '@/shared/assets/icons/plus-512-512.svg';
import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';
import { Textarea } from '@/shared/ui/Textarea/Textarea';

import cls from './EditArticleTextBlock.module.scss';

interface EditArticleTextBlockProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	block: ArticleTextBlock;
	onChangeBlockState: (editedBlock: ArticleTextBlock) => void;
}

export const EditArticleTextBlock = memo((props: EditArticleTextBlockProps) => {
	const {
		className,
		block,
		onChangeBlockState,
		...otherProps
	} = props;

	const [textBlock, setTextBlock] = useState(block);
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const onClickEditIcon = () => setIsEdit(true);

	const onCancel = () => {
		setIsEdit(false);
		setTextBlock(block);
	};

	const onSave = () => {
		setIsEdit(false);
		onChangeBlockState(textBlock);
	};

	const onAddBlock = () => {
		setTextBlock(() => {
			return {
				...block,
				paragraphs: [...textBlock.paragraphs, '']
			};
		});
	};

	const onDeleteBlock = (index: number) => (e: MouseEvent) => {
		const newParagraphs = [...textBlock.paragraphs];
		newParagraphs.splice(index, 1);

		setTextBlock(() => {
			return {
				...block,
				paragraphs: newParagraphs
			};
		});
	};

	const onChangeTitle = (value: string) => {
		setTextBlock((block) => {
			return {
				...block,
				title: value
			};
		});
	};

	const onChangeParagraph = (index: number) => (value: string) => {
		setTextBlock((block) => {
			const newParagraphs = [...textBlock.paragraphs];
			newParagraphs[index] = value;

			return {
				...block,
				paragraphs: newParagraphs
			};
		});
	};

	const mods: Mods = {
		[cls.draggable]: !isEdit
	};

	if (isEdit) {
		return (
			<div
				className={classNames(cls.EditArticleTextBlock, mods, [className])}
				draggable={!isEdit}
				{...otherProps}
			>
				<Button theme={ButtonTheme.CLEAR} onClick={onSave}
				        className={classNames(cls.icon, {}, [cls.markIcon])}>
					<MarkIcon/>
				</Button>
				<Button theme={ButtonTheme.CLEAR} onClick={onCancel}
				        className={classNames(cls.icon, {}, [cls.cancelIcon])}>
					<CancelIcon/>
				</Button>
				<Input
					className={cls.title}
					theme={'outlined'}
					value={textBlock.title}
					onChange={onChangeTitle}
				/>
				{textBlock.paragraphs.map((paragraph, index) => (
					<div className={cls.paragraph} key={`key${index}`}>
						<Textarea
							theme={'outlined'}
							value={paragraph}
							onChange={onChangeParagraph(index)}
						/>
						<MinusIcon
							onClick={onDeleteBlock(index)}
							className={classNames(cls.icon, {}, [cls.minusIcon])}
						/>
					</div>
				))}
				<div className={cls.plusBtnWrapper}>
					<Button theme={ButtonTheme.CLEAR} onClick={onAddBlock}
					        className={classNames(cls.icon, {}, [])}>
						<PlusIcon/>
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div
			className={classNames(cls.EditArticleTextBlock, mods, [className])}
			draggable={!isEdit}
			{...otherProps}
		>
			<EditIcon
				onClick={onClickEditIcon}
				className={classNames(cls.icon, {}, [cls.editIcon])}
			/>
			<MoveIcon className={classNames(cls.icon, {}, [cls.moveIcon])}/>
			{textBlock.title && (
				<Text title={textBlock.title} className={cls.title}/>
			)}
			{textBlock.paragraphs.map((paragraph, index) => (
				<Text key={index} text={paragraph} className={cls.pargraph}/>
			))}
		</div>
	);
});
