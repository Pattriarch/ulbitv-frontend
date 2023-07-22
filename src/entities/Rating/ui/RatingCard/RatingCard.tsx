import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';

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
        rate = 0
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const isMobile = useDevice();

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
        setIsModalOpen(true);
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')}/>
        </>
    );

    const ratingComponent = (
        <VStack max align={'center'} gap={'8'}>
            <Text title={starsCount ? t('Спасибо за оценку') : title}/>
            <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars}/>
        </VStack>
    );

    if (!hasFeedback) {
        return (
            <Card max className={className}>
                {ratingComponent}
            </Card>
        );
    }

    return (
        <Card max className={className}>
            {ratingComponent}
            {isMobile
                ? (
                    <Drawer isOpen={isModalOpen}>
                        <VStack max gap={'32'}>
                            {modalContent}
                            <HStack max gap={'16'} justify={'end'}>
                                <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Drawer>
                )
                : (
                    <Modal isOpen={isModalOpen} onClose={cancelHandler}>
                        <VStack max gap={'32'}>
                            {modalContent}
                            <HStack max gap={'16'} justify={'end'}>
                                <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                                    {t('Закрыть')}
                                </Button>
                                <Button onClick={acceptHandler}>
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                )}
        </Card>
    );
});
