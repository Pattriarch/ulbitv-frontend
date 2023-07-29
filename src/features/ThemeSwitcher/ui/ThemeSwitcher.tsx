import React, { memo, useCallback } from 'react';


import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/swap-theme-32-32.svg';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = memo(
	({ className }: ThemeSwitcherProps): JSX.Element => {
		const { toggleTheme } = useTheme();
		const dispatch = useAppDispatch();

		const onToggleHandler = useCallback(() => {
			toggleTheme((newTheme) => {
				void dispatch(saveJsonSettings({ theme: newTheme }));
			});
		}, [dispatch, toggleTheme]);

		return (
			<ToggleFeatures
				name={'isAppRedesigned'}
				on={
					<Icon
						clickable
						onClick={onToggleHandler}
						Svg={ThemeIcon}
					/>
				}
				off={
					<ButtonDeprecated
						theme={ButtonTheme.CLEAR}
						type={'button'}
						className={classNames('', {}, [className])}
						onClick={onToggleHandler}
					>
						<IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted={true} />
					</ButtonDeprecated>
				}
			/>
		);
	},
);
