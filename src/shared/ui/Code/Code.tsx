import { useCallback } from 'react';

import { Button, ButtonTheme } from '../Button/Button';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Code.module.scss';

interface CodeProps {
	className?: string;
	text: string;
	withCopyIcon?: boolean;
}

export const Code = (props: CodeProps): JSX.Element => {
	const {
		className,
		text,
		withCopyIcon = true
	} = props;

	const onCopy = useCallback(() => {
		void navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.Code, {}, [className])}>
            {withCopyIcon && <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon}/>
            </Button>}
			<code>
                {text}
            </code>
        </pre>
	);
};
