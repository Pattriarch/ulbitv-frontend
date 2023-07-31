import { memo } from 'react';

import { ArticleView } from '../../consts/articleConsts';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
	className?: string;
	view?: ArticleView;
}

export const ArticleListItemSkeleton = memo(
	(props: ArticleListItemSkeletonProps) => {
		const { className, view = ArticleView.BIG } = props;

		const mainClass = toggleFeatures({
			name: 'isAppRedesigned',
			on: () => cls.ArticleListItemRedesigned,
			off: () => cls.ArticleListItem,
		});

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
					className={classNames(mainClass, {}, [
						className,
						cls[view],
					])}
				>
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={
							<Card className={cls.card} padding={'24'}>
								<VStack gap={'16'}>
									<HStack gap={'8'}>
										<Skeleton
											height={32}
											width={32}
											border={'50%'}
										/>
										<Skeleton width={140} height={24} />
									</HStack>
									<Skeleton width={250} height={32} />
									<Skeleton width={400} height={24} />
									<Skeleton width={'100%'} height={420} />
									<Skeleton width={'100%'} height={72} />
									<HStack max justify={'between'}>
										<Skeleton width={150} height={44} />
										<Skeleton width={80} height={32} />
									</HStack>
								</VStack>
							</Card>
						}
						off={
							<Card className={cls.card}>
								<div className={cls.header}>
									<Skeleton
										height={30}
										width={30}
										border={'50%'}
									/>
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
						}
					/>
				</div>
			);
		}

		const cardContent = (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Card className={cls.card}>
						{/* <div className={cls.imageWrapper}> */}
						<Skeleton
							width={'100%'}
							height={140}
							className={cls.img}
						/>
						{/* </div> */}
						<div className={cls.infoWrapper}>
							<Skeleton
								width={'100%'}
								height={96}
								className={cls.info}
							/>
						</div>
						<VStack gap={'8'} className={cls.footer} max>
							<HStack justify={'between'} max>
								<Skeleton width={80} height={20} />
								<HStack gap={'8'}>
									<Skeleton width={80} height={20} />
								</HStack>
							</HStack>
							<HStack gap={'8'} className={cls.userInfo}>
								<Skeleton
									width={32}
									height={32}
									border={'50%'}
								/>
								<Skeleton width={80} height={16} />
							</HStack>
						</VStack>
					</Card>
				}
				off={
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
						<Skeleton
							width={150}
							height={16}
							className={cls.title}
						/>
					</Card>
				}
			/>
		);

		return (
			<div className={classNames(mainClass, {}, [className, cls[view]])}>
				{cardContent}
			</div>
		);
	},
);
