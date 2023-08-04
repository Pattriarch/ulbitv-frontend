import { type HTMLAttributes, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleImageBlock } from '../../model/types/article';

import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import {
	Text as TextDeprecated,
	TextAlign,
} from '@/shared/ui/deprecated/Text/Text';

import cls from './EditArticleImageBlock.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';

interface EditArticleImageBlockProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	isEdit: boolean;
	block: ArticleImageBlock;
	onChangeBlockState: (editedBlock: ArticleImageBlock) => void;
	setEditBlock: (block: ArticleImageBlock) => void;
	editBlock: ArticleImageBlock;
}

export const EditArticleImageBlock = memo(
	(props: EditArticleImageBlockProps) => {
		const { t } = useTranslation();
		const {
			className,
			isEdit,
			block,
			editBlock,
			onChangeBlockState,
			setEditBlock,
			...otherProps
		} = props;

		const onChangeImage = (value: string) => {
			setEditBlock({
				...editBlock,
				src: value,
			});
		};

		const onChangeTitle = (value: string) => {
			setEditBlock({
				...editBlock,
				title: value,
			});
		};

		if (isEdit) {
			return (
				<>
					<div className={cls.preview}>
						<img
							src={editBlock.src}
							className={cls.img}
							alt={editBlock.title}
						/>
					</div>
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={
							<>
								<Text text={t('Путь к изображению')} />
								<Input
									variant={'outlined'}
									value={editBlock?.src}
									onChange={onChangeImage}
								/>
								<Text text={t('Текст под изображением')} />
								<Input
									variant={'outlined'}
									value={editBlock?.title}
									onChange={onChangeTitle}
								/>
							</>
						}
						off={
							<>
								<TextDeprecated
									text={t('Путь к изображению')}
								/>
								<InputDeprecated
									theme={'outlined'}
									value={editBlock?.src}
									onChange={onChangeImage}
								/>
								<TextDeprecated
									text={t('Текст под изображением')}
								/>
								<InputDeprecated
									theme={'outlined'}
									value={editBlock?.title}
									onChange={onChangeTitle}
								/>
							</>
						}
					/>
				</>
			);
		}

		return (
			<VStack gap={'16'} align={'center'}>
				<img
					src={editBlock.src}
					className={cls.img}
					alt={editBlock.title}
				/>
				{editBlock.title && (
					<Text text={editBlock.title} align={TextAlign.CENTER} />
				)}
			</VStack>
		);
	},
);
