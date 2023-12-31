import { type DragEvent, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	getEditArticleError,
	getEditArticleForm,
	getEditArticleIsLoading,
} from '../../model/selectors/editArticleFormSelectors';
import { updateArticleData } from '../../model/services/updateArticleData/updateArticleData';
import {
	editArticleFormActions,
	editArticleFormReducer,
} from '../../model/slices/editArticleFormSlice';

import {
	fetchArticleById,
	ArticleBlockType,
	ArticleBlock,
	ArticleCard,
} from '@/entities/Article';
import {
	getRouteArticleDetails,
	getRouteArticles,
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
	Button as ButtonDeprecated,
	ButtonSize,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './EditArticleForm.module.scss';

interface EditArticleFormProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Идентификатор редактируемой статьи.
	 */
	id: string;
}

const reducers: ReducersList = {
	editArticleForm: editArticleFormReducer,
};

/**
 * Компонент EditArticleForm - форма редактирования статьи.
 *
 * @component
 *
 * @param {Object} props - Пропсы компонента.
 * @param {string} props.className - Дополнительные стили компонента.
 * @param {string} props.id - Идентификатор редактируемой статьи.
 * @returns {JSX.Element} - Возвращает JSX элемент формы редактирования статьи.
 */
export const EditArticleForm = memo((props: EditArticleFormProps) => {
	const { className, id } = props;

	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const data = useSelector(getEditArticleForm);
	const isLoading = useSelector(getEditArticleIsLoading);
	const error = useSelector(getEditArticleError);

	useInitialEffect(() => {
		void dispatch(fetchArticleById(id));
	});

	const [currentBlock, setCurrentBlock] = useState<ArticleBlock | undefined>(
		undefined,
	);

	const onChangeImage = useCallback(
		(value: string) => {
			void dispatch(
				editArticleFormActions.updateArticle({ img: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeTitle = useCallback(
		(value: string) => {
			void dispatch(
				editArticleFormActions.updateArticle({ title: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeSubtitle = useCallback(
		(value: string) => {
			void dispatch(
				editArticleFormActions.updateArticle({ subtitle: value || '' }),
			);
		},
		[dispatch],
	);

	const onChangeBlocks = useCallback(
		(blocks: ArticleBlock[]) => {
			void dispatch(editArticleFormActions.updateArticle({ blocks }));
		},
		[dispatch],
	);

	const calculateLastId = useCallback((blocks: ArticleBlock[]) => {
		const arrIds = blocks?.map((block) => +block.id);
		return Math.max(...arrIds);
	}, []);

	const calculateLastOrder = useCallback((blocks: ArticleBlock[]) => {
		const orders = blocks?.map((block) => block.order);
		return Math.max(...orders);
	}, []);

	const getEmptyBlock = useCallback(
		(blocks?: ArticleBlock[]) => {
			if (!blocks) {
				return {
					id: '1',
					order: 1,
				};
			}

			const lastId = calculateLastId(blocks);
			const lastOrder = calculateLastOrder(blocks);
			return {
				id: String(lastId + 1),
				order: lastOrder + 1,
			};
		},
		[calculateLastId, calculateLastOrder],
	);

	const onAddCodeBlock = useCallback(() => {
		const block = getEmptyBlock(data?.blocks);
		void dispatch(
			editArticleFormActions.updateArticle({
				blocks: [
					...(data?.blocks ?? []),
					{
						...block,
						type: ArticleBlockType.CODE,
						code: '',
					},
				],
			}),
		);
	}, [data?.blocks, dispatch, getEmptyBlock]);

	const onAddTextBlock = useCallback(() => {
		const block = getEmptyBlock(data?.blocks);
		void dispatch(
			editArticleFormActions.updateArticle({
				blocks: [
					...(data?.blocks ?? []),
					{
						...block,
						type: ArticleBlockType.TEXT,
						title: '',
						paragraphs: [],
					},
				],
			}),
		);
	}, [data?.blocks, dispatch, getEmptyBlock]);

	const onAddImageBlock = useCallback(() => {
		const block = getEmptyBlock(data?.blocks);
		void dispatch(
			editArticleFormActions.updateArticle({
				blocks: [
					...(data?.blocks ?? []),
					{
						...block,
						type: ArticleBlockType.IMAGE,
						title: '',
						src: '',
					},
				],
			}),
		);
	}, [data?.blocks, dispatch, getEmptyBlock]);

	const onChangeBlockState = (editedBlock: ArticleBlock) => {
		if (!data?.blocks || !editedBlock) return;

		onChangeBlocks(
			data.blocks.map((block) => {
				if (block.id === editedBlock.id) {
					return {
						...block,
						...editedBlock,
					};
				}
				return block;
			}),
		);
	};

	const onRemoveBlock = (id: string) => {
		if (!data?.blocks) return;
		onChangeBlocks(data.blocks.filter((block) => block.id !== id));
	};

	const onCancel = useCallback(() => {
		void dispatch(editArticleFormActions.cancelEdit());
		navigate(getRouteArticles());
	}, [dispatch, navigate]);

	const onSave = useCallback(() => {
		void dispatch(updateArticleData());
		navigate(getRouteArticleDetails(id));
	}, [dispatch, id, navigate]);

	const dragStartHandler = (
		e: DragEvent<HTMLDivElement>,
		editBlock: ArticleBlock,
	) => {
		setCurrentBlock(editBlock);
	};

	const dragEndHandler = (e: DragEvent<HTMLDivElement>) => {
		e.currentTarget.style.opacity = '1';
	};

	const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.currentTarget.style.opacity = '0.2';
	};

	const dropHandler = (
		e: DragEvent<HTMLDivElement>,
		editBlock: ArticleBlock,
	) => {
		e.preventDefault();

		if (!data?.blocks || !editBlock || !currentBlock) return;

		onChangeBlocks(
			data?.blocks?.map((block) => {
				if (block.id === editBlock.id) {
					return {
						...block,
						order: currentBlock.order,
					};
				}
				if (block.id === currentBlock?.id) {
					return {
						...block,
						order: editBlock.order,
					};
				}
				return block;
			}),
		);

		e.currentTarget.style.opacity = '1';
	};

	const sortBlocks = (a: ArticleBlock, b: ArticleBlock) => {
		if (a.order > b.order) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.EditArticleForm, {}, [className])}>
				<ArticleCard
					data={data}
					isLoading={isLoading}
					error={error}
					onChangeImage={onChangeImage}
					onChangeTitle={onChangeTitle}
					onChangeSubtitle={onChangeSubtitle}
					onAddCodeBlock={onAddCodeBlock}
					onAddImageBlock={onAddImageBlock}
					onAddTextBlock={onAddTextBlock}
					dragStartHandler={dragStartHandler}
					dragEndHandler={dragEndHandler}
					dragOverHandler={dragOverHandler}
					dropHandler={dropHandler}
					sortBlocks={sortBlocks}
					onChangeBlockState={onChangeBlockState}
					onRemoveBlock={onRemoveBlock}
				/>
				<HStack gap={'16'} justify={'end'} max>
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={
							<>
								<Button
									type={'button'}
									size={'l'}
									variant={'outline'}
									color={'error'}
									onClick={onCancel}
								>
									{t('Отменить')}
								</Button>
								<Button
									type={'button'}
									size={'l'}
									variant={'outline'}
									color={'success'}
									onClick={onSave}
								>
									{t('Сохранить')}
								</Button>
							</>
						}
						off={
							<>
								<ButtonDeprecated
									type={'button'}
									size={ButtonSize.L}
									theme={ButtonTheme.BACKGROUND_INVERTED}
									onClick={onCancel}
								>
									{t('Отменить')}
								</ButtonDeprecated>
								<ButtonDeprecated
									type={'button'}
									size={ButtonSize.L}
									theme={ButtonTheme.BACKGROUND_INVERTED}
									onClick={onSave}
								>
									{t('Сохранить')}
								</ButtonDeprecated>
							</>
						}
					/>
				</HStack>
			</div>
		</DynamicModuleLoader>
	);
});
