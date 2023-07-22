import { Button } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const Counter = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = (): void => {
        dispatch(counterActions.increment());
    };
    const decrement = (): void => {
        dispatch(counterActions.decrement());
    };

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
