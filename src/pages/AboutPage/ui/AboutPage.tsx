import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

/**
 * Страница "О сайте".
 *
 * @component
 * @returns {JSX.Element} Страница "О сайте".
 */
const AboutPage = memo((): JSX.Element => {
	const { t } = useTranslation('about');

	return (
		<Page data-testid={'AboutPage'}>
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<VStack gap={'16'}>
						<Text title={t('О сайте')} size={'l'} tag={'h1'} />
						<VStack gap={'32'}>
							<VStack gap={'8'}>
								<Text title={t('Что у нас под капотом?')} size={'m'} tag={'h2'} />
								<Text text={t('• Архитектура:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text
									text={t('Feature Sliced Design — современный подход к структурированию ' +
										'кода. Как пазл, который всегда соответствует картинке на коробке.')}
									size={'m'} tag={'p'} />
								<Text text={t('• Сборка и разработка:')} size={'m'} tag={'p'}
								      weight={'extrabold'} />
								<Text
									text={t('Webpack и Vite — эти инструменты помогают нам быстро и эффективно собирать проект.')}
									size={'m'} tag={'p'} />
								<Text text={t('• Языки и стили:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text
									text={t('TypeScript и SCSS — эти инструменты помогают нам писать ' +
										'чистый и типизированный код.')}
									size={'m'} tag={'p'} />
								<Text text={t('• Локализация:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text
									text={t('i18next — благодаря этой библиотеки вы можете изменять язык в одно мгновение.')}
									size={'m'} tag={'p'} />

								<Text text={t('• Тестирование и документация:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text text={t('Jest, Cypress и React Testing Library — незаменимые помощники,' +
									' которые помогают нам убедиться, что все работает как часы. Storybook и Loki п' +
									'озволяют нам визуализировать и проверять наши компоненты, ' +
									'создавая истории для каждого из них.')} size={'m'} tag={'p'} />

								<Text text={t('• Code Style и качество кода:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text text={t('ESLint, Prettier и Stylelint — наши стражи чистоты кода. ' +
									'Они не пропускают ошибки и следят за тем, чтобы наш код ' +
									'был читаем и последователен.')} size={'m'} tag={'p'} />
								<Text text={t('TS-Morph, Dependency-Cruiser и Circular-Dependency-Plugin — ' +
									'помогают нам анализировать и улучшать структуру кода.')} size={'m'} tag={'p'} />

								<Text text={t('• Дополнительные инструменты:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text text={t('JSON Server позволяет нам создавать быстрые моки ' +
									'для RESTful API.')} size={'m'} tag={'p'} />
								<Text text={t('Husky и lint-staged гарантируют, что каждый коммит ' +
									'соответствует нашим стандартам.')} size={'m'} tag={'p'} />
								<Text text={t('Concurrently оптимизирует наши рабочие процессы, ' +
									'позволяя запускать несколько задач одновременно.')} size={'m'} tag={'p'} />
								<Text text={t('browserslist помогает нам оставаться совместимыми' +
									' со многими версиями браузеров.')} size={'m'} tag={'p'} />

								<Text text={t('• CI/CD и инфраструктура:')} size={'m'} tag={'p'} weight={'extrabold'} />
								<Text text={t('Наши автоматизированные процессы обеспечивают быструю ' +
									'и безболезненную интеграцию и доставку. А настройка nginx гарантирует ' +
									'стабильность и безопасность нашего сервера.')} size={'m'} tag={'p'} />

							</VStack>
						</VStack>
					</VStack>
				}
				off={
					<TextDeprecated
						title={t('О сайте')}
						size={TextSize.L}
						tag={'h1'}
					/>
				}
			/>
		</Page>
	);
});

export default AboutPage;
