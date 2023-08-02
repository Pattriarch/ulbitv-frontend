import { memo, useState } from 'react';

import { Icon as IconDeprecated } from '../../deprecated/Icon';
import { Icon } from '../Icon/Icon';

import StarIcon from '@/shared/assets/icons/star-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

import cls from './StarRating.module.scss';

interface StarRatingProps {
	className?: string;
	onSelect?: (starsCount: number) => void;
	size?: number;
	selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
	const { className, size = 30, selectedStars = 0, onSelect } = props;

	const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
	const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

	// итерация по массиву, поэтому используем замыкание
	const onHover = (starsCount: number) => () => {
		if (!isSelected) {
			setCurrentStarsCount(starsCount);
		}
	};

	const onLeave = () => {
		if (!isSelected) {
			setCurrentStarsCount(0);
		}
	};

	const onClick = (starsCount: number) => () => {
		if (!isSelected) {
			onSelect?.(starsCount);
			setCurrentStarsCount(starsCount);
			setIsSelected(true);
		}
	};

	const mainClass = toggleFeatures({
		name: 'isAppRedesigned',
		on: () => cls.StarRatingRedesigned,
		off: () => cls.StarRating,
	});

	return (
		<div className={classNames(mainClass, {}, [className])}>
			{stars.map((starNumber) => {
				const commonProps = {
					className: classNames(
						cls.starIcon,
						{ [cls.isSelected]: isSelected },
						[
							currentStarsCount >= starNumber
								? cls.hovered
								: cls.normal,
						],
					),
					Svg: StarIcon,
					key: starNumber,
					width: size,
					height: size,
					onMouseLeave: onLeave,
					onMouseEnter: onHover(starNumber),
					onClick: onClick(starNumber),
					'data-testid': `StarRating.${starNumber}`,
					'data-selected': currentStarsCount >= starNumber,
				};

				return (
					<ToggleFeatures
						key={starNumber}
						name={'isAppRedesigned'}
						on={<Icon clickable={!isSelected} {...commonProps} />}
						off={<IconDeprecated {...commonProps} />}
					/>
				);
			})}
		</div>
	);
});
