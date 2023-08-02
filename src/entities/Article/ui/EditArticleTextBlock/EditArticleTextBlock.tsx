import { type HTMLAttributes, memo, type MouseEvent } from 'react';

import { type ArticleTextBlock } from '../../model/types/article';

import MinusIcon from '@/shared/assets/icons/minus-512-512.svg';
import PlusIcon from '@/shared/assets/icons/plus-512-512.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { Textarea as TextareaDeprecated } from '@/shared/ui/deprecated/Textarea/Textarea';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { Textarea } from '@/shared/ui/redesigned/Textarea/Textarea';

import cls from './EditArticleTextBlock.module.scss';

interface EditArticleTextBlockProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	isEdit: boolean;
	block: ArticleTextBlock;
	onChangeBlockState: (editedBlock: ArticleTextBlock) => void;
	setEditBlock: (block: ArticleTextBlock) => void;
	editBlock: ArticleTextBlock;
}

export const EditArticleTextBlock = memo((props: EditArticleTextBlockProps) => {
	const {
		className,
		isEdit,
		block,
		editBlock,
		onChangeBlockState,
		setEditBlock,
		...otherProps
	} = props;

	const onAddBlock = () => {
		setEditBlock({
			...editBlock,
			paragraphs: [...editBlock.paragraphs, ''],
		});
	};

	const onDeleteBlock = (index: number) => (e: MouseEvent) => {
		const newParagraphs = [...editBlock.paragraphs];
		newParagraphs.splice(index, 1);

		setEditBlock({
			...editBlock,
			paragraphs: newParagraphs,
		});
	};

	const onChangeTitle = (value: string) => {
		setEditBlock({
			...editBlock,
			title: value,
		});
	};

	const onChangeParagraph = (index: number) => (value: string) => {
		const newParagraphs = [...editBlock.paragraphs];
		newParagraphs[index] = value;
		setEditBlock({
			...editBlock,
			paragraphs: newParagraphs,
		});
	};

	if (isEdit) {
		return (
			<>
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<Input
							className={cls.title}
							theme={'outlined'}
							value={editBlock.title}
							onChange={onChangeTitle}
						/>
					}
					off={
						<InputDeprecated
							className={cls.title}
							theme={'outlined'}
							value={editBlock.title}
							onChange={onChangeTitle}
						/>
					}
				/>
				{editBlock.paragraphs.map((paragraph, index) => (
					<div className={cls.paragraph} key={`key${index}`}>
						<ToggleFeatures
							name={'isAppRedesigned'}
							on={
								<Textarea
									theme={'outlined'}
									value={paragraph}
									onChange={onChangeParagraph(index)}
								/>
							}
							off={
								<TextareaDeprecated
									theme={'outlined'}
									value={paragraph}
									onChange={onChangeParagraph(index)}
								/>
							}
						/>
						<Icon
							width={20}
							height={20}
							clickable
							onClick={() => onDeleteBlock(index)}
							className={classNames(cls.icon, {}, [
								cls.minusIcon,
							])}
							Svg={MinusIcon}
						/>
					</div>
				))}
				<div className={cls.plusBtnWrapper}>
					<Icon
						clickable
						onClick={onAddBlock}
						className={classNames(cls.icon, {}, [])}
						Svg={PlusIcon}
					/>
				</div>
			</>
		);
	}

	return (
		<>
			{editBlock.title && (
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={<Text title={editBlock.title} className={cls.title} />}
					off={
						<TextDeprecated
							title={editBlock.title}
							className={cls.title}
						/>
					}
				/>
			)}
			{editBlock.paragraphs.map((paragraph, index) => (
				<ToggleFeatures
					key={index}
					name={'isAppRedesigned'}
					on={
						<Text
							key={index}
							text={paragraph}
							className={cls.paragraph}
						/>
					}
					off={
						<TextDeprecated
							key={index}
							text={paragraph}
							className={cls.paragraph}
						/>
					}
				/>
			))}
		</>
	);
});
