import { Flex, type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const HStack = (props: HStackProps) => {
	return (
		<Flex {...props} direction={'row'}>
			{props.children}
		</Flex>
	);
};
