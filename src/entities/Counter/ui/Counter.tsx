import { useTranslation } from 'react-i18next';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui/Button';

export const Counter = (): JSX.Element => {
	// const dispatch = useAppDispatch();
	// const counterValue = useSelector(getCounterValue);
	const counterValue = useCounterValue();
	const {
		add,
		decrement,
		increment
	} = useCounterActions();
	const { t } = useTranslation();

	const handleIncrement = (): void => {
		increment();
		// dispatch(counterActions.increment());
	};
	const handleDecrement = (): void => {
		decrement();
		// dispatch(counterActions.decrement());
	};

	const handleAddFive = (): void => {
		add(5);
		// dispatch(counterActions.decrement());
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
