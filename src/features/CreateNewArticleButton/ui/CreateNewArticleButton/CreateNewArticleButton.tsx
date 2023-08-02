import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateNewArticleIcon from '@/shared/assets/icons/edit-32-32.svg';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface NotificationButtonProps {
	className?: string;
}

export const CreateNewArticleButton = memo((props: NotificationButtonProps) => {
	const { className } = props;
	const navigate = useNavigate();

	const onClickCreateNewArticle = () => {
		navigate(getRouteArticleCreate());
	};

	return (
		<Icon
			className={classNames('', {}, [className])}
			Svg={CreateNewArticleIcon}
			clickable
			onClick={onClickCreateNewArticle}
		/>
	);
});
