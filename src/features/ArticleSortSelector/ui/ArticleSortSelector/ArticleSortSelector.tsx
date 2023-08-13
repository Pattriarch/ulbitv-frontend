import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { type SortOrder } from '@/shared/types';
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
	/** Дополнительное имя класса для стилизации. */
	className?: string;

	/** Текущее выбранное поле сортировки. */
	sort: ArticleSortField;

	/** Текущий выбранный порядок сортировки. */
	order: SortOrder;

	/**
	 * Функция обратного вызова, вызываемая при изменении порядка сортировки.
	 * @param newOrder - Новый порядок сортировки.
	 */
	onChangeOrder: (newOrder: SortOrder) => void;

	/**
	 * Функция обратного вызова, вызываемая при изменении поля сортировки.
	 * @param newSort - Новое поле сортировки.
	 */
	onChangeSort: (newSort: ArticleSortField) => void;
}

/**
 * Компонент для выбора и изменения параметров сортировки статей.
 *
 * @component
 * @param {ArticleSortSelectorProps} props - Свойства компонента ArticleSortSelector.
 * @returns {JSX.Element} Компонент для выбора и изменения параметров сортировки статей.
 */
export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const { className, sort, order, onChangeOrder, onChangeSort } = props;
	const { t } = useTranslation();

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(
		() => [
			{
				value: 'asc',
				content: t('возрастанию'),
			},
			{
				value: 'desc',
				content: t('убыванию'),
			},
		],
		[t],
	);

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
		() => [
			{
				value: ArticleSortField.CREATED,
				content: t('дате создания'),
			},
			{
				value: ArticleSortField.TITLE,
				content: t('названию'),
			},
			{
				value: ArticleSortField.VIEWS,
				content: t('просмотрам'),
			},
		],
		[t],
	);

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<div
					className={classNames(
						cls.ArticleSortSelectorRedesigned,
						{},
						[className],
					)}
				>
					<VStack gap={'8'}>
						<Text text={t('Сортировать по:')} />
						<ListBox
							items={sortFieldOptions}
							value={sort}
							onChange={onChangeSort}
						/>
						<ListBox
							items={orderOptions}
							value={order}
							onChange={onChangeOrder}
						/>
					</VStack>
				</div>
			}
			off={
				<div
					className={classNames(cls.ArticleSortSelector, {}, [
						className,
					])}
				>
					<Select
						options={sortFieldOptions}
						label={t('Сортировать ПО')}
						value={sort}
						onChange={onChangeSort}
					/>
					<Select
						options={orderOptions}
						label={t('по')}
						value={order}
						onChange={onChangeOrder}
						className={cls.order}
					/>
				</div>
			}
		/>
	);
});
