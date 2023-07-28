import React, { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(
	({ className }: ThemeSwitcherProps): JSX.Element => {
		const { theme, toggleTheme } = useTheme();
		const dispatch = useAppDispatch();

		const onToggleHandler = useCallback(() => {
			toggleTheme((newTheme) => {
				void dispatch(saveJsonSettings({ theme: newTheme }));
			});
		}, [dispatch, toggleTheme]);

		return (
			<Button
				theme={ButtonTheme.CLEAR}
				type={'button'}
				className={classNames('', {}, [className])}
				onClick={onToggleHandler}
			>
				<Icon Svg={ThemeIcon} width={40} height={40} inverted={true} />
			</Button>
		);
	},
);
