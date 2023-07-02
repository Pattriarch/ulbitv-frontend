import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

const LoginForm = memo(({ className }: LoginFormProps): JSX.Element => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        if (username && password) {
            // @ts-expect-error
            dispatch(loginByUsername({ username, password }));
        }
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')}/>
                {error && <Text text={
                    t('Вы ввели неверный логин или пароль')
                } theme={TextTheme.ERROR}/>}
                <Input
                    autofocus
                    type="text"
                    placeholder={t('Введите логин')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    placeholder={t('Введите пароль')}
                    className={cls.input}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
