import { Flex, type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Компонент HStack позволяет располагать дочерние элементы в горизонтальном стеке.
 * Он использует компонент Flex для этой цели, устанавливая направление расположения в 'row'.
 *
 * @component
 * @param {HStackProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент HStack.
 */
export const HStack = (props: HStackProps) => {
	return (
		<Flex {...props} direction={'row'}>
			{props.children}
		</Flex>
	);
};
