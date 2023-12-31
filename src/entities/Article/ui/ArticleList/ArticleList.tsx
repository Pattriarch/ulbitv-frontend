import {
	type FC,
	type HTMLAttributeAnchorTarget,
	memo,
	type ReactNode,
	useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
	Virtuoso,
	VirtuosoGrid,
	type VirtuosoGridHandle,
} from 'react-virtuoso';

import { ArticleView } from '../../consts/articleConsts';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
	/**
	 * Функциональный компонент для заголовка списка.
	 */
	Header?: () => ReactNode;

	/**
	 * Опциональный класс для стилизации.
	 */
	className?: string;

	/**
	 * Массив статей для отображения.
	 */
	articles: Article[];

	/**
	 * Определяет вид отображения статей.
	 */
	view?: ArticleView;

	/**
	 * Определяет, выполняется ли загрузка данных.
	 */
	isLoading?: boolean;

	/**
	 * Значение для атрибута `target` тега `<a>`.
	 */
	target?: HTMLAttributeAnchorTarget;

	/**
	 * Обработчик события достижения конца списка для подгрузки следующей порции данных.
	 */
	onLoadNextPart?: () => void;

	/**
	 * Индекс последнего прокрученного элемента.
	 */
	lastScrolledIndex?: number;

	/**
	 * Функция для установки значения последнего прокрученного элемента.
	 */
	setLastScrolledIndex?: (index: number) => void;

	/**
	 * Опция для включения виртуализации (используется `react-virtuoso`).
	 */
	virtualized?: boolean;
}


const getSkeletons = (view: ArticleView) =>
	new Array(view === ArticleView.BIG ? 8 : 25)
		.fill(0)
		.map((item, index) => (
			<ArticleListItemSkeleton
				className={cls.card}
				key={index}
				view={view}
			/>
		));

/**
 * Компонент для отображения списка статей.
 *
 * @param {ArticleListProps} props Свойства компонента.
 * @returns {JSX.Element} Список статей.
 */
export const ArticleList = memo((props: ArticleListProps) => {
	const {
		Header,
		className,
		articles,
		view = ArticleView.SMALL,
		isLoading,
		target,
		onLoadNextPart,
		lastScrolledIndex,
		setLastScrolledIndex,
		virtualized = false,
	} = props;

	const { t } = useTranslation();
	const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

	useAppEffect(() => {
		let timeout: NodeJS.Timeout;
		if (view === ArticleView.SMALL) {
			timeout = setTimeout(() => {
				if (virtuosoGridRef.current && lastScrolledIndex) {
					virtuosoGridRef.current.scrollToIndex(lastScrolledIndex);
				}
			}, 300);
		}

		return () => clearTimeout(timeout);
	}, [lastScrolledIndex, view]);

	useAppEffect(() => {
		window.addEventListener('error', (e) => {
			if (e.message === 'ResizeObserver loop limit exceeded') {
				const resizeObserverErrDiv = document.getElementById(
					'webpack-dev-server-client-overlay-div',
				);
				const resizeObserverErr = document.getElementById(
					'webpack-dev-server-client-overlay',
				);
				if (resizeObserverErr) {
					resizeObserverErr.setAttribute('style', 'display: none');
				}
				if (resizeObserverErrDiv) {
					resizeObserverErrDiv.setAttribute('style', 'display: none');
				}
			}
		});
	}, []);

	const renderArticle = (index: number, article: Article) => (
		<ArticleListItem
			article={article}
			view={view}
			className={cls.card}
			target={target}
			key={article.id}
			index={index}
			setLastScrolledIndex={setLastScrolledIndex}
		/>
	);

	const Footer = memo(() => {
		if (isLoading) {
			return <div className={cls.skeleton}>{getSkeletons(view)}</div>;
		}
		return null;
	});

	if (!isLoading && !articles.length) {
		return (
			<div
				className={classNames(cls.ArticleList, {}, [
					className,
					cls[view],
				])}
			>
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={<Text size={'l'} title={t('Статьи не найдены')} />}
					off={
						<TextDeprecated
							size={TextSize.L}
							title={t('Статьи не найдены')}
						/>
					}
				/>
			</div>
		);
	}

	// можно вынести за пределы компонента
	const ItemContainerComp: FC<{
		height: number,
		width: number,
		index: number,
	}> = ({ height, width, index }) => (
		<div className={cls.ItemContainer}>
			<ArticleListItemSkeleton
				key={index}
				view={view}
				className={cls.card}
			/>
		</div>
	);

	const virtuosoComponents =
		Header !== undefined ? { Header, Footer } : { Footer };
	const virtuosoGridComponents =
		Header !== undefined
			? {
					Header,
					ScrollSeekPlaceholder: ItemContainerComp,
			  }
			: { ScrollSeekPlaceholder: ItemContainerComp };

	if (!virtualized) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<HStack
						wrap={'wrap'}
						gap={'16'}
						data-testid={'ArticleList'}
						className={classNames(
							cls.ArticleListRedesigned,
							{},
							[],
						)}
					>
						{articles.length > 0
							? articles.map((article, index) =>
									renderArticle(index, article),
							  )
							: null}
						{isLoading && getSkeletons(view)}
					</HStack>
				}
				off={
					<div
						data-testid={'ArticleList'}
						className={classNames(cls.ArticleList, {}, [
							className,
							cls[view],
						])}
					>
						{articles.length > 0
							? articles.map((article, index) =>
									renderArticle(index, article),
							  )
							: null}
						{isLoading && getSkeletons(view)}
					</div>
				}
			/>
		);
	}

	return (
		<div
			data-testid={'ArticleList'}
			className={classNames(cls.ArticleList, {}, [className, cls[view]])}
		>
			{view === ArticleView.BIG ? (
				<Virtuoso
					style={{ height: '100%' }}
					data={articles}
					itemContent={renderArticle}
					endReached={onLoadNextPart}
					initialTopMostItemIndex={lastScrolledIndex}
					// @ts-expect-error virtuoso error
					components={virtuosoComponents}
				/>
			) : (
				<VirtuosoGrid
					ref={virtuosoGridRef}
					totalCount={articles.length}
					// @ts-expect-error virtuoso error
					components={virtuosoGridComponents}
					data={articles}
					endReached={onLoadNextPart}
					itemContent={renderArticle}
					listClassName={cls.itemsWrapper}
					scrollSeekConfiguration={{
						enter: (velocity) => Math.abs(velocity) > 200,
						exit: (velocity) => Math.abs(velocity) < 30,
					}}
				/>
			)}
		</div>
	);
});
