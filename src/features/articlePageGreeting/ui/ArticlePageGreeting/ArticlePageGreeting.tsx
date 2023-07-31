import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Text } from '@/shared/ui/deprecated/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';

export const ArticlePageGreeting = memo(() => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const { isArticlesPageWasOpened } = useJsonSettings();
	const dispatch = useAppDispatch();
	const isMobile = useDevice();

	useEffect(() => {
		if (!isArticlesPageWasOpened) {
			setIsOpen(true);
			void dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
		}
	}, [isArticlesPageWasOpened, dispatch]);

	const onClose = () => setIsOpen(false);

	const text = (
		<Text
			title={t('Добро пожаловать на страницу статей')}
			text={t(
				'Здесь вы можете искать и просматривать статьи на различные темы',
			)}
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
