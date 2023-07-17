import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { type CSSProperties, useMemo } from 'react';

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = (props: AvatarProps): JSX.Element => {
    const {
        className,
        src,
        size,
        alt
    } = props;

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        };
    }, [size]);

    const mods: Mods = {};

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
};
