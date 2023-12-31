import React, { memo } from 'react';

import ListIcon from '../../../../shared/assets/icons/burger-32-32.svg';
import ListIconDeprecated from '../../../../shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '../../../../shared/assets/icons/tiled-24-24.svg';
import TiledIcon from '../../../../shared/assets/icons/tiled-32-32.svg';

import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	/** Дополнительные стили компонента. */
	className?: string;

	/** Текущий выбранный вид отображения статей. */
	view?: ArticleView; // для подсветки выбранного

	/**
	 * Callback-функция, вызываемая при смене выбранного вида отображения.
	 *
	 * @callback onViewClick
	 * @param {ArticleView} view - Выбранный вид отображения.
	 * @returns {void}
	 */
	onViewClick?: (view: ArticleView) => void; // для переключения отображения
}

/**
 * Компонент для выбора вида отображения статей.
 *
 * @component
 * @param {ArticleViewSelectorProps} props - Свойства компонента ArticleViewSelector.
 * @returns {JSX.Element} Компонент для выбора вида отображения статей.
 */
export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
	const { className, view, onViewClick } = props;

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	const viewTypes = [
		{
			view: ArticleView.BIG,
			icon: toggleFeatures({
				name: 'isAppRedesigned',
				on: () => ListIcon,
				off: () => ListIconDeprecated,
			}),
		},
		{
			view: ArticleView.SMALL,
			icon: toggleFeatures({
				name: 'isAppRedesigned',
				on: () => TiledIcon,
				off: () => TiledIconDeprecated,
			}),
		},
	];

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Card
					className={classNames(
						cls.ArticleViewSelectorRedesigned,
						{},
						[className],
					)}
					border={'partial'}
					data-testid={'ArticleViewSelector'}
				>
					<HStack gap={'8'}>
						{viewTypes.map((viewType, index) => (
							<Icon
								data-testid={`ArticleViewSelector.Button.${viewType.view}`}
								key={index}
								className={classNames(cls.icon, {
									[cls.selected]: viewType.view === view,
								})}
								clickable
								onClick={onClick(viewType.view)}
								Svg={viewType.icon}
							/>
						))}
					</HStack>
				</Card>
			}
			off={
				<div
					className={classNames(cls.ArticleViewSelector, {}, [
						className,
					])}
					data-testid={'ArticleViewSelector'}
				>
					{viewTypes.map((viewType, index) => (
						<ButtonDeprecated
							key={index}
							theme={ButtonTheme.CLEAR}
							onClick={onClick(viewType.view)}
							data-testid={`ArticleViewSelector.Button.${viewType.view}`}
						>
							<IconDeprecated
								className={classNames(cls.icon, {
									[cls.selected]: viewType.view === view,
								})}
								width={24}
								height={24}
								Svg={viewType.icon}
							/>
						</ButtonDeprecated>
					))}
				</div>
			}
		/>
	);
});
