import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  type ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Text, TextTheme } from "@/shared/ui/Text";

import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(
  ({ className, onSuccess }: LoginFormProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback(
      (value: string) => {
        dispatch(loginActions.setUsername(value));
      },
      [dispatch]
    );

    const onChangePassword = useCallback(
      (value: string) => {
        dispatch(loginActions.setPassword(value));
      },
      [dispatch]
    );

    const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === "fulfilled") {
        onSuccess?.();
      }
    }, [onSuccess, username, password, dispatch]);

    return (
      <DynamicModuleLoader reducers={initialReducers}>
        <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t("Форма авторизации")} />
          {error && (
            <Text
              text={t("Вы ввели неверный логин или пароль")}
              theme={TextTheme.ERROR}
            />
          )}
          <Input
            autofocus
            type="text"
            placeholder={t("Введите логин")}
            className={cls.input}
            onChange={onChangeUsername}
            value={username}
          />
          <Input
            type="text"
            placeholder={t("Введите пароль")}
            className={cls.input}
            onChange={onChangePassword}
            value={password}
          />
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.loginBtn}
            onClick={() => void onLoginClick()}
            disabled={isLoading}
          >
            {t("Войти")}
          </Button>
        </div>
      </DynamicModuleLoader>
    );
  }
);

export default LoginForm;
