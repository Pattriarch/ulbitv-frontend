import { counterActions, counterReducer } from './model/slices/counterSlice';
import type { CounterSchema } from './model/types/counterSchema';
import { Counter } from './ui/Counter';

export { Counter, type CounterSchema, counterActions, counterReducer };
