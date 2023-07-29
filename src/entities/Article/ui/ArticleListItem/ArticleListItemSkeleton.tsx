import { memo } from 'react';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { ArticleView } from '../../consts/articleConsts';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticleListItem.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
	className?: string;
	view?: ArticleView;
}

export const ArticleListItemSkeleton = memo(
	(props: ArticleListItemSkeletonProps) => {
		const { className, view = ArticleView.BIG } = props;

		const Skeleton = toggleFeatures({
			name: 'isAppRedesigned',
			on: () => SkeletonRedesigned,
			off: () => SkeletonDeprecated,
		});

		const Card = toggleFeatures({
			name: 'isAppRedesigned',
			on: () => CardRedesigned,
			off: () => CardDeprecated,
		});

		if (view === ArticleView.BIG) {
			return (
				<div
					className={classNames(cls.ArticleListItem, {}, [
						className,
						cls[view],
					])}
				>
					<Card className={cls.card}>
						<div className={cls.header}>
							<Skeleton height={30} width={30} border={'50%'} />
							<Skeleton
								width={150}
								height={16}
								className={cls.username}
							/>
							<Skeleton
								width={150}
								height={16}
								className={cls.date}
							/>
						</div>
						<Skeleton
							width={250}
							height={24}
							className={cls.title}
						/>
						<Skeleton height={200} className={cls.img} />
						<div className={cls.footer}>
							<Skeleton height={36} width={200} />
						</div>
					</Card>
				</div>
			);
		}

		return (
			<div
				className={classNames(cls.ArticleListItem, {}, [
					className,
					cls[view],
				])}
			>
				<Card className={cls.card}>
					<div className={cls.imageWrapper}>
						<Skeleton
							width={200}
							height={200}
							className={cls.img}
						/>
					</div>
					<div className={cls.infoWrapper}>
						<Skeleton width={130} height={16} />
					</div>
					<Skeleton width={150} height={16} className={cls.title} />
				</Card>
			</div>
		);
	},
);
