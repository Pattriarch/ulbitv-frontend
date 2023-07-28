import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';
import {
	Button,
	ButtonSize,
	ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps): JSX.Element => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);

	const onToggle = (): void => {
		setCollapsed((prev) => !prev);
	};

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<aside
					data-testid={'sidebar'}
					className={classNames(
						cls.SidebarRedesigned,
						{ [cls.collapsed]: collapsed },
						[className],
					)}
				>
					<AppLogo className={cls.appLogo} />
				</aside>
			}
			off={
				<aside
					data-testid={'sidebar'}
					className={classNames(
						cls.Sidebar,
						{ [cls.collapsed]: collapsed },
						[className],
					)}
				>
					<Button
						type={'button'}
						data-testid={'sidebar-toggle'}
						onClick={onToggle}
						className={cls.collapseBtn}
						theme={ButtonTheme.BACKGROUND_INVERTED}
						size={ButtonSize.L}
						square
					>
						{collapsed ? '>' : '<'}
					</Button>
					<VStack tag={'nav'} gap={'8'} className={cls.items}>
						{sidebarItemsList.map((item) => (
							<SidebarItem
								key={item.path}
								item={item}
								collapsed={collapsed}
							/>
						))}
					</VStack>
					<div className={cls.switchers}>
						<ThemeSwitcher />
						<LangSwitcher short={collapsed} className={cls.lang} />
					</div>
				</aside>
			}
		/>
	);
});
