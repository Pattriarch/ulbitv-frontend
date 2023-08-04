import React, { memo, useState } from 'react';

import { useSidebarItems } from '../../model/lib/useSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps): JSX.Element => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSidebarItems();

	const onToggle = (): void => {
		setCollapsed((prev) => !prev);
	};

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
			// todo: перепроверить почему не полная высота в сторибуке
				<aside
					data-testid={'sidebar'}
					className={classNames(
						cls.SidebarRedesigned,
						{ [cls.collapsedRedesigned]: collapsed },
						[className],
					)}
				>
					<AppLogo
						size={collapsed ? 30 : 50}
						className={cls.appLogo}
					/>
					<VStack tag={'nav'} gap={'8'} className={cls.items}>
						{sidebarItemsList.map((item) => (
							<SidebarItem
								key={item.path}
								item={item}
								collapsed={collapsed}
							/>
						))}
					</VStack>
					<Icon
						data-testid={'sidebar-toggle'}
						onClick={onToggle}
						className={cls.collapseBtn}
						Svg={ArrowIcon}
						clickable
					/>
					<HStack gap={'16'} className={cls.switchers}>
						<ThemeSwitcher />
						<LangSwitcher short={collapsed} className={cls.lang} />
					</HStack>
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
					<HStack gap={'16'} className={cls.switchers}>
						<ThemeSwitcher />
						<LangSwitcher short={collapsed} className={cls.lang} />
					</HStack>
				</aside>
			}
		/>
	);
});
