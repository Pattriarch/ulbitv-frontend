import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

interface CounterProps {
	className?: string;
}

export const Counter = ({ className }: CounterProps): JSX.Element => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = (): void => {
        dispatch(counterActions.increment());
    };
    const decrement = (): void => {
        dispatch(counterActions.decrement());
    };

    const { t } = useTranslation();

    return (
        <div>
            <h1 data-testid={'value-title'}>{counterValue}</h1>
            <Button
                data-testid={'increment-btn'}
                onClick={increment}
                type={'button'}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid={'decrement-btn'}
                onClick={decrement}
                type={'button'}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
