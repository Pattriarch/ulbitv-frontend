import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/redesigned/Text';
import { useAppEffect } from '@/shared/lib/hooks/useAppEffect/useAppEffect';

export const ArticlePageGreeting = memo(() => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const { isArticlesPageWasOpened } = useJsonSettings();
	const dispatch = useAppDispatch();
	const isMobile = useDevice();

	useAppEffect(() => {
		if (!isArticlesPageWasOpened) {
			setIsOpen(true);
			void dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
		}
	}, [isArticlesPageWasOpened, dispatch]);

	const onClose = () => setIsOpen(false);

	const text = (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<Text
					title={t('Добро пожаловать на страницу статей')}
					text={t(
						'Здесь вы можете искать и просматривать статьи на различные темы',
					)}
				/>
			}
			off={
				<TextDeprecated
					title={t('Добро пожаловать на страницу статей')}
					text={t(
						'Здесь вы можете искать и просматривать статьи на различные темы',
					)}
				/>
			}
		/>
	);

	if (isMobile) {
		return (
			<Drawer isOpen={isOpen} onClose={onClose}>
				{text}
			</Drawer>
		);
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			{text}
		</Modal>
	);
});
