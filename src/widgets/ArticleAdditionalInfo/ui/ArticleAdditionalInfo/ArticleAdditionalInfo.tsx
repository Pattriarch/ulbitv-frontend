import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Флаг, указывающий, может ли информация быть редактируемой.
	 */
	isEditable: boolean;

	/**
	 * Автор статьи.
	 */
	author?: User;

	/**
	 * Дата создания статьи.
	 */
	createdAt?: string;

	/**
	 * Количество просмотров статьи.
	 */
	views?: number;

	/**
	 * Callback-функция, вызываемая при редактировании информации.
	 */
	onEdit: () => void;
}

/**
 * Компонент ArticleAdditionalInfo отображает дополнительную информацию о статье,
 * такую как автор, дата создания, количество просмотров, а также кнопку редактирования.
 *
 * @component
 * @param {ArticleAdditionalInfoProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент ArticleAdditionalInfo.
 */
export const ArticleAdditionalInfo = memo(
	(props: ArticleAdditionalInfoProps) => {
		const { t } = useTranslation();
		const { className, author, isEditable, views, createdAt, onEdit } =
			props;

		return (
			<VStack gap={'32'} className={classNames('', {}, [className])}>
				<HStack gap={'8'}>
					<Avatar src={author?.avatar} size={32} />
					<Text text={author?.username} />
					<Text text={createdAt} />
				</HStack>
				{isEditable && (
					<Button onClick={onEdit}>{t('Редактировать')}</Button>
				)}
				<Text text={t('{{count}} просмотров', { count: views })} />
			</VStack>
		);
	},
);
