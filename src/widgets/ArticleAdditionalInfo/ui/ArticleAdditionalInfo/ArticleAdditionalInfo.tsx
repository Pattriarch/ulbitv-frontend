import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
	className?: string;
	isEditable: boolean;
	author?: User;
	createdAt?: string;
	views?: number;
	onEdit: () => void;
}

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
