import { Counter } from './Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Test increment', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Test decrement', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
