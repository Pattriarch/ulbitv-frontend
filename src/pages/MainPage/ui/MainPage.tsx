import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

/**
 * Компонент, представляющий главную страницу.
 *
 * @component
 * @returns {JSX.Element} Компонент MainPage.
 */
const MainPage = memo((): JSX.Element => {
	const { t } = useTranslation('main');

	return (
		<Page data-testid={'MainPage'}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<VStack gap={'16'}>
						<Text title={t('Главная')} size={'l'} tag={'h1'} />
						<VStack gap={'32'}>
							<VStack gap={'8'}>
								<Text title={t('Добро пожаловать на сайт!')} size={'m'} tag={'h2'} />
								<Text
									text={t('Это современный новостной портал, где информация и знания сочетаются с ' +
										'интерактивностью и возможностями социальных сетей. У нас вы можете не только' +
										' читать актуальные новости и глубоко проработанные статьи на различные темы,' +
										' но и стать частью нашего дружного сообщества.')}
									size={'m'} tag={'p'} />
							</VStack>
							<VStack gap={'8'}>
								<Text title={t('Что вы найдете на сайте:')} size={'m'} tag={'h3'} />
								<Text text={t('• Актуальные новости:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text
									text={t('Будьте в курсе последних событий со всего мира, ' +
										'благодаря нашим быстрым и объективным новостным обзорам.')}
									size={'m'} tag={'p'} />
								<Text text={t('• Статьи от экспертов и энтузиастов:')} size={'m'} tag={'p'}
								      weight={'extrabold'} />
								<Text
									text={t('Познакомьтесь с глубокими аналитическими материалами, ' +
										'мнениями экспертов, историями успеха и многим другим.')}
									size={'m'} tag={'p'} />
								<Text text={t('• Интерактивное общение:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text
									text={t('Оставляйте свои комментарии, ставьте оценки, обсуждайте ' +
										'статьи с другими читателями и авторами, участвуйте в дебатах и обмене мнениями.')}
									size={'m'} tag={'p'} />
							</VStack>
						</VStack>
					</VStack>
				}
				off={
					<TextDeprecated
						title={t('Главная страница')}
						size={TextSize.L}
						tag={'h1'}
					/>
				}
			/>
		</Page>
	);
});

export default MainPage;
