import type {
  StateSchema,
  ThunkExtraArg,
  ThunkConfig,
  StateSchemaKey,
  ReduxStoreWithManager,
} from "./config/StateSchema";
import { createReduxStore, type AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type AppDispatch,
  type ThunkExtraArg,
  type ThunkConfig,
  type StateSchemaKey,
  type ReduxStoreWithManager,
};
