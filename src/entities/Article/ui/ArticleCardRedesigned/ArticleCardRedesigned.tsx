import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleCardProps } from '../ArticleCard/ArticleCard';
import { EditArticleBlock } from '../EditArticleBlock/EditArticleBlock';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleCardRedesigned.module.scss';

export const ArticleCardRedesignedLoader = () => {
	return <div className={cls.EditArticleForm}>{/* <Loader /> */}</div>;
};

export const ArticleCardRedesignedError = () => {
	const { t } = useTranslation();

	return (
		<div className={cls.EditArticleForm}>
			<Text
				variant={'error'}
				title={t('Произошла ошибка при загрузке статьи')}
			/>
		</div>
	);
};

export const ArticleCardRedesigned = memo((props: ArticleCardProps) => {
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
						value={data?.title}
						onChange={onChangeTitle}
					/>
				</VStack>
				<VStack max>
					<Text text={t('Подзаголовок статьи')} />
					<Input
						theme={'outlined'}
						value={data?.subtitle}
						onChange={onChangeSubtitle}
					/>
				</VStack>
				<div className={cls.imageWrapper}>
					<AppImage src={data?.img} className={cls.image} />
					{/* <Avatar size={200} src={data?.img} className={cls.avatar} /> */}
				</div>
				<VStack max>
					<Text text={t('Путь к изображению')} />
					<Input
						theme={'outlined'}
						value={data?.img}
						onChange={onChangeImage}
					/>
				</VStack>
				<Text
					tag={'h2'}
					size={'l'}
					title={t('Содержимое статьи')}
					className={cls.contentBlocksTitle}
				/>
				{data?.blocks
					?.slice()
					?.sort(sortBlocks)
					?.map((block) => (
						<VStack key={block.id} max gap={'8'}>
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
								variant={'filled'}
								onClick={() => onRemoveBlock(block.id)}
							>
								{t('Удалить')}
							</Button>
						</VStack>
					))}
			</VStack>
			<HStack gap={'16'} className={cls.actions}>
				<Button color={'success'} onClick={onAddCodeBlock}>
					{t('Добавить код')}
				</Button>
				<Button color={'success'} onClick={onAddTextBlock}>
					{t('Добавить текст')}
				</Button>
				<Button color={'success'} onClick={onAddImageBlock}>
					{t('Добавить изображение')}
				</Button>
			</HStack>
		</div>
	);
});
