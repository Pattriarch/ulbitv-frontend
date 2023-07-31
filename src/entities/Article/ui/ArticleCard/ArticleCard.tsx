import { type DragEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleBlock } from '../../model/types/article';
import {
	ArticleCardDeprecated,
	ArticleCardDeprecatedError,
	ArticleCardDeprecatedLoader,
} from '../ArticleCardDeprecated/ArticleCardDeprecated';
import {
	ArticleCardRedesigned,
	ArticleCardRedesignedError,
	ArticleCardRedesignedLoader,
} from '../ArticleCardRedesigned/ArticleCardRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

export interface ArticleCardProps {
	className?: string;
	data?: Article;
	isLoading?: boolean;
	error?: string;
	onChangeImage?: (value: string) => void;
	onChangeTitle?: (value: string) => void;
	onChangeSubtitle: (value: string) => void;
	onAddCodeBlock?: () => void;
	onAddTextBlock?: () => void;
	onAddImageBlock?: () => void;
	dragStartHandler: (
		e: DragEvent<HTMLDivElement>,
		editBlock: ArticleBlock,
	) => void;
	dragEndHandler: (e: DragEvent<HTMLDivElement>) => void;
	dragOverHandler: (e: DragEvent<HTMLDivElement>) => void;
	dropHandler: (
		e: DragEvent<HTMLDivElement>,
		editBlock: ArticleBlock,
	) => void;
	onRemoveBlock: (id: string) => void;
	sortBlocks: (a: ArticleBlock, b: ArticleBlock) => number;
	onChangeBlockState: (editedBlock: ArticleBlock) => void;
}

export const ArticleCard = memo((props: ArticleCardProps) => {
	const {
		isLoading,
		error,
	} = props;

	if (isLoading) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<ArticleCardRedesignedLoader />}
				off={<ArticleCardDeprecatedLoader />}
			/>
		);
	}

	if (error) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={<ArticleCardRedesignedError />}
				off={<ArticleCardDeprecatedError />}
			/>
		);
	}

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={<ArticleCardRedesigned {...props} />}
			off={<ArticleCardDeprecated {...props} />}
		/>
	);

	// if (isLoading) {
	// 	return (
	// 		<div className={classNames(cls.EditArticleForm, {}, [className])}>
	// 			<Loader />
	// 		</div>
	// 	);
	// }

	// if (error) {
	// 	return (
	// 		<div className={classNames(cls.EditArticleForm, {}, [className])}>
	// 			<Text
	// 				theme={TextTheme.ERROR}
	// 				title={t('Произошла ошибка при загрузке статьи')}
	// 			/>
	// 		</div>
	// 	);
	// }

	// return (
	// 	<div className={classNames(cls.ArticleCard, {}, [className])}>
	// 		<Text text={t('Заголовок статьи')} />
	// 		<Input
	// 			theme={'outlined'}
	// 			className={cls.title}
	// 			value={data?.title}
	// 			onChange={onChangeTitle}
	// 		/>
	// 		<Text text={t('Подзаголовок статьи')} />
	// 		<Input
	// 			theme={'outlined'}
	// 			className={cls.subtitle}
	// 			value={data?.subtitle}
	// 			onChange={onChangeSubtitle}
	// 		/>
	// 		<div className={cls.imageWrapper}>
	// 			<AppImage src={data?.img} className={cls.image} />
	// 			{/* <Avatar size={200} src={data?.img} className={cls.avatar} /> */}
	// 		</div>
	// 		<Text text={t('Путь к изображению')} />
	// 		<Input
	// 			theme={'outlined'}
	// 			className={cls.subtitle}
	// 			value={data?.img}
	// 			onChange={onChangeImage}
	// 		/>
	// 		<Text text={t('Содержимое статьи')} />
	// 		{data?.blocks
	// 			?.slice()
	// 			?.sort(sortBlocks)
	// 			?.map((block) => (
	// 				<Fragment key={block.id}>
	// 					<EditArticleBlock
	// 						onDragStart={(e) => dragStartHandler(e, block)}
	// 						onDragLeave={(e) => dragEndHandler(e)}
	// 						onDragEnd={(e) => dragEndHandler(e)}
	// 						onDragOver={(e) => dragOverHandler(e)}
	// 						onDrop={(e) => dropHandler(e, block)}
	// 						draggable={true}
	// 						onChangeBlockState={onChangeBlockState}
	// 						block={block}
	// 						className={cls.block}
	// 					/>
	// 					<Button
	// 						className={cls.deleteBtn}
	// 						theme={ButtonTheme.BACKGROUND_INVERTED}
	// 						onClick={() => onRemoveBlock(block.id)}
	// 					>
	// 						{t('Удалить')}
	// 					</Button>
	// 				</Fragment>
	// 			))}
	// 		<HStack gap={'16'} className={cls.actions}>
	// 			<Button onClick={onAddCodeBlock}>{t('Добавить код')}</Button>
	// 			<Button onClick={onAddTextBlock}>{t('Добавить текст')}</Button>
	// 			<Button onClick={onAddImageBlock}>
	// 				{t('Добавить изображение')}
	// 			</Button>
	// 		</HStack>
	// 	</div>
	// );
});
