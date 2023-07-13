export { userReducer, userActions } from './model/slice/userSlice';
export type { AuthData, UserSchema } from './model/types/authData';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
