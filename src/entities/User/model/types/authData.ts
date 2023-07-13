export interface AuthData {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: AuthData;

    _inited: boolean;
}
