import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames('', {}, [className])} />
    );
};

export default memo(ArticlesPage);
