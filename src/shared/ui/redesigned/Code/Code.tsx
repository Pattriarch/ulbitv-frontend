import { useCallback } from 'react';

import { Button, ButtonTheme } from '../../deprecated/Button';
import { Icon } from '../Icon';

import CopyIconDeprecated from '@/shared/assets/icons/copy-20-20.svg';
import CopyIcon from '@/shared/assets/icons/copy-32-32.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import cls from './Code.module.scss';

interface CodeProps {
	className?: string;
	text: string;
	withCopyIcon?: boolean;
}

export const Code = (props: CodeProps): JSX.Element => {
	const { className, text, withCopyIcon = true } = props;

	const onCopy = useCallback(() => {
		void navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<ToggleFeatures
			name={'isAppRedesigned'}
			on={
				<pre
					className={classNames(cls.CodeRedesigned, {}, [className])}
				>
					<Icon
						Svg={CopyIcon}
						clickable
						onClick={onCopy}
						className={cls.copyBtn}
					/>
					<code>{text}</code>
				</pre>
			}
			off={
				<pre className={classNames(cls.Code, {}, [className])}>
					{withCopyIcon && (
						<Button
							onClick={onCopy}
							className={cls.copyBtn}
							theme={ButtonTheme.CLEAR}
						>
							<CopyIconDeprecated className={cls.copyIcon} />
						</Button>
					)}
					<code>{text}</code>
				</pre>
			}
		/>
	);
};
