import {
	memo,
	type MutableRefObject,
	type ReactNode,
	type UIEvent,
	useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { type StateSchema } from '@/app/providers/StoreProvider';
import {
	scrollRestorationActions,
	getScrollRestorationByPath,
} from '@/features/ScrollRestoration';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
	/**
	 * Дополнительные стили компонента.
	 */
	className?: string;

	/**
	 * Дочерние элементы, которые будут отображаться на странице.
	 */
	children: ReactNode;

	/**
	 * Callback-функция, вызываемая при достижении конца прокрутки страницы.
	 */
	onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

/**
 * Компонент Page представляет страницу приложения с функциями восстановления прокрутки и бесконечной прокрутки.
 *
 * @component
 * @param {PageProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент Page.
 */
export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollTopPosition = useSelector((state: StateSchema) =>
		getScrollRestorationByPath(state, pathname),
	);

	useInfiniteScroll({
		triggerRef,
		wrapperRef: toggleFeatures({
			name: 'isAppRedesigned',
			on: () => undefined,
			off: () => wrapperRef,
		}),
		callback: onScrollEnd,
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollTopPosition;
	});

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			scrollRestorationActions.setScrollPosition({
				position: e.currentTarget.scrollTop,
				path: pathname,
			}),
		);
	}, 500);

	return (
		<main
			ref={wrapperRef}
			className={classNames(
				toggleFeatures({
					name: 'isAppRedesigned',
					on: () => cls.PageRedesigned,
					off: () => cls.Page,
				}),
				{},
				[className],
			)}
			onScroll={onScroll}
			id={PAGE_ID}
			data-testid={props['data-testid'] ?? 'Page'}
		>
			{children}
			{onScrollEnd ? (
				<div className={cls.trigger} ref={triggerRef} />
			) : null}
		</main>
	);
});
