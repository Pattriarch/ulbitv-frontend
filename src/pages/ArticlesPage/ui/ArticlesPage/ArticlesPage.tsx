import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';

export interface ArticlesPageProps {
	className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={[]}/>
        </div>
    );
};

export default memo(ArticlesPage);
