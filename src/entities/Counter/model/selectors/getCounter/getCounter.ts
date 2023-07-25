import { type CounterSchema } from "../../types/counterSchema";

import { type StateSchema } from "@/app/providers/StoreProvider";

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
