import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';
import { memo } from 'react';

interface LoaderProps {
	className?: string;
}

export const Loader = memo(({ className }: LoaderProps): JSX.Element => {
    return (
        <div className={classNames('lds-roller', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
});
