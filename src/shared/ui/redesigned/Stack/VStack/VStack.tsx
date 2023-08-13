import { memo } from 'react';

import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Компонент VStack представляет вертикальный стек (колонку) элементов с заданными свойствами.
 * Основан на компоненте Flex и устанавливает направление элементов в столбец.
 *
 * @component
 * @param {VStackProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент VStack.
 */
export const VStack = memo((props: VStackProps) => {
	const { align = 'start' } = props;

	return (
		<Flex {...props} direction={'column'} align={align}>
			{props.children}
		</Flex>
	);
});
