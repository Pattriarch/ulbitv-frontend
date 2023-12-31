import { Fragment, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { EditArticleBlock } from '../../EditArticleBlock/EditArticleBlock';
import { ArticleCardProps } from '../ArticleCard';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleCardDeprecated.module.scss';

export const ArticleCardDeprecatedLoader = () => {
	return (
		<div className={cls.EditArticleForm}>
			<Loader />
		</div>
	);
};

export const ArticleCardDeprecatedError = () => {
	const { t } = useTranslation();

	return (
		<div className={cls.EditArticleForm}>
			<Text
				theme={TextTheme.ERROR}
				title={t('Произошла ошибка при загрузке статьи')}
			/>
		</div>
	);
};

export const ArticleCardDeprecated = memo((props: ArticleCardProps) => {
	const {
		className,
		data,
		onChangeImage,
		onChangeTitle,
		onChangeSubtitle,
		onAddCodeBlock,
		onAddTextBlock,
		onAddImageBlock,
		dragStartHandler,
		dragEndHandler,
		dragOverHandler,
		dropHandler,
		onRemoveBlock,
		sortBlocks,
		onChangeBlockState,
	} = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.ArticleCard, {}, [className])}>
			<VStack gap={'16'} max>
				<VStack max>
					<Text text={t('Заголовок статьи')} />
					<Input
						theme={'outlined'}
						className={cls.title}
						value={data?.title}
						onChange={onChangeTitle}
					/>
				</VStack>
				<VStack max>
					<Text text={t('Подзаголовок статьи')} />
					<Input
						theme={'outlined'}
						className={cls.subtitle}
						value={data?.subtitle}
						onChange={onChangeSubtitle}
					/>
				</VStack>
				<div className={cls.imageWrapper}>
					<AppImage
						src={
							!data?.img
								? 'https://placehold.co/800x420'
								: data.img
						}
						className={cls.image}
					/>
				</div>
				<VStack max>
					<Text text={t('Путь к изображению')} />
					<Input
						theme={'outlined'}
						className={cls.subtitle}
						value={data?.img}
						onChange={onChangeImage}
					/>
				</VStack>
				<Text text={t('Содержимое статьи')} />
				{data?.blocks
					?.slice()
					?.sort(sortBlocks)
					?.map((block) => (
						<Fragment key={block.id}>
							<EditArticleBlock
								onDragStart={(e) => dragStartHandler(e, block)}
								onDragLeave={(e) => dragEndHandler(e)}
								onDragEnd={(e) => dragEndHandler(e)}
								onDragOver={(e) => dragOverHandler(e)}
								onDrop={(e) => dropHandler(e, block)}
								draggable={true}
								onChangeBlockState={onChangeBlockState}
								block={block}
								className={cls.block}
							/>
							<Button
								className={cls.deleteBtn}
								theme={ButtonTheme.BACKGROUND_INVERTED}
								onClick={() => onRemoveBlock(block.id)}
							>
								{t('Удалить')}
							</Button>
						</Fragment>
					))}
			</VStack>
			<HStack gap={'16'} className={cls.actions}>
				<Button onClick={onAddCodeBlock}>{t('Добавить код')}</Button>
				<Button onClick={onAddTextBlock}>{t('Добавить текст')}</Button>
				<Button onClick={onAddImageBlock}>
					{t('Добавить изображение')}
				</Button>
			</HStack>
		</div>
	);
});
