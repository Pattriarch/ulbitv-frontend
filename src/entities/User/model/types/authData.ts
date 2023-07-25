import { type UserRole } from "../../consts/userConsts";

export interface AuthData {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface UserSchema {
  authData?: AuthData;

  _inited: boolean;
}
