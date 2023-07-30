import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
	Button as ButtonDeprecated,
	ButtonSize,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface RatingCardProps {
	className?: string;
	title?: string;
	feedbackTitle?: string;
	hasFeedback?: boolean;
	onCancel?: (starsCount: number) => void;
	onAccept?: (starsCount: number, feedback?: string) => void;
	rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
	const {
		className,
		title,
		feedbackTitle,
		hasFeedback,
		onCancel,
		onAccept,
		rate = 0,
	} = props;
	const { t } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [starsCount, setStarsCount] = useState(rate);
	const [feedback, setFeedback] = useState('');
	const isMobile = useDevice();

	const onSelectStars = useCallback(
		(selectedStarsCount: number) => {
			setStarsCount(selectedStarsCount);
			if (hasFeedback) {
				setIsModalOpen(true);
			} else {
				onAccept?.(selectedStarsCount);
			}
			setIsModalOpen(true);
		},
		[hasFeedback, onAccept],
	);

	const acceptHandler = useCallback(() => {
		setIsModalOpen(false);
		onAccept?.(starsCount, feedback);
	}, [feedback, onAccept, starsCount]);

	const cancelHandler = useCallback(() => {
		setIsModalOpen(false);
		onCancel?.(starsCount);
	}, [onCancel, starsCount]);

	const modalContent = (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<>
					<Text title={feedbackTitle} />
					<Input
						data-testid={'RatingCard.Input'}
						value={feedback}
						onChange={setFeedback}
						placeholder={t('Ваш отзыв')}
					/>
				</>
			}
			off={
				<>
					<TextDeprecated title={feedbackTitle} />
					<InputDeprecated
						data-testid={'RatingCard.Input'}
						value={feedback}
						onChange={setFeedback}
						placeholder={t('Ваш отзыв')}
					/>
				</>
			}
		/>
	);

	const ratingComponent = (
		<VStack max align={'center'} gap={'8'}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<>
						<Text
							title={starsCount ? t('Спасибо за оценку') : title}
						/>
						<StarRating
							selectedStars={starsCount}
							size={40}
							onSelect={onSelectStars}
						/>
					</>
				}
				off={
					<>
						<TextDeprecated
							title={starsCount ? t('Спасибо за оценку') : title}
						/>
						<StarRating
							selectedStars={starsCount}
							size={40}
							onSelect={onSelectStars}
						/>
					</>
				}
			/>
		</VStack>
	);

	if (!hasFeedback) {
		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Card
						max
						className={className}
						padding={'24'}
						border={'round'}
					>
						{ratingComponent}
					</Card>
				}
				off={
					<CardDeprecated max className={className}>
						{ratingComponent}
					</CardDeprecated>
				}
			/>
		);
	}

	const content = (
		<>
			{ratingComponent}
			{isMobile ? (
				<Drawer isOpen={isModalOpen}>
					<VStack max gap={'32'}>
						{modalContent}
						<ToggleFeatures
							name={'isAppRedesigned'}
							on={
								<HStack max gap={'16'} justify={'end'}>
									<Button
										fullWidth
										onClick={acceptHandler}
										size={'l'}
									>
										{t('Отправить')}
									</Button>
								</HStack>
							}
							off={
								<HStack max gap={'16'} justify={'end'}>
									<ButtonDeprecated
										fullWidth
										onClick={acceptHandler}
										size={ButtonSize.L}
									>
										{t('Отправить')}
									</ButtonDeprecated>
								</HStack>
							}
						/>
					</VStack>
				</Drawer>
			) : (
				<Modal isOpen={isModalOpen} onClose={cancelHandler}>
					<VStack max gap={'32'}>
						{modalContent}
						<ToggleFeatures
							name={'isAppRedesigned'}
							on={
								<HStack max gap={'16'} justify={'end'}>
									<Button
										data-testid={'RatingCard.Close'}
										onClick={cancelHandler}
									>
										{t('Закрыть')}
									</Button>
									<Button
										data-testid={'RatingCard.Send'}
										onClick={acceptHandler}
									>
										{t('Отправить')}
									</Button>
								</HStack>
							}
							off={
								<HStack max gap={'16'} justify={'end'}>
									<ButtonDeprecated
										data-testid={'RatingCard.Close'}
										onClick={cancelHandler}
										theme={ButtonTheme.OUTLINE_RED}
									>
										{t('Закрыть')}
									</ButtonDeprecated>
									<ButtonDeprecated
										data-testid={'RatingCard.Send'}
										onClick={acceptHandler}
									>
										{t('Отправить')}
									</ButtonDeprecated>
								</HStack>
							}
						/>
					</VStack>
				</Modal>
			)}
		</>
	);

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Card
					data-testid={'RatingCard'}
					max
					className={className}
					padding={'24'}
					border={'round'}
				>
					{content}
				</Card>
			}
			off={
				<CardDeprecated
					data-testid={'RatingCard'}
					max
					className={className}
				>
					{content}
				</CardDeprecated>
			}
		/>
	);
});
