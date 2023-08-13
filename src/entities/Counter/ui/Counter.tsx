import { useTranslation } from 'react-i18next';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slices/counterSlice';

import { Button } from '@/shared/ui/deprecated/Button';

/**
 * Компонент счетчика, позволяющий увеличивать и уменьшать значение счетчика.
 *
 * @component
 * @returns {JSX.Element} Элемент счетчика.
 */
export const Counter = (): JSX.Element => {
	const counterValue = useCounterValue();
	const { decrement, increment } = useCounterActions();
	const { t } = useTranslation();

	const handleIncrement = (): void => {
		increment();
	};
	const handleDecrement = (): void => {
		decrement();
	};

	return (
		<div>
			<h1 data-testid={'value-title'}>{counterValue}</h1>
			<Button
				data-testid={'increment-btn'}
				onClick={handleIncrement}
				type={'button'}
			>
				{t('increment')}
			</Button>
			<Button
				data-testid={'decrement-btn'}
				onClick={handleDecrement}
				type={'button'}
			>
				{t('decrement')}
			</Button>
		</div>
	);
};
