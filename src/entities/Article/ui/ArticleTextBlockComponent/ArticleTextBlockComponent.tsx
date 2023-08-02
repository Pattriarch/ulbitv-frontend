import { memo } from 'react';

import { type ArticleTextBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
	(props: ArticleTextBlockComponentProps) => {
		const { className, block } = props;

		return (
			<VStack gap={'8'} className={classNames('', {}, [className])}>
				{block.title && (
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={<Text title={block.title} />}
						off={<TextDeprecated title={block.title} />}
					/>
				)}
				{block.paragraphs.map((paragraph, index) => (
					<ToggleFeatures
						key={index}
						name={'isAppRedesigned'}
						on={<Text key={index} text={paragraph} />}
						off={<TextDeprecated key={index} text={paragraph} />}
					/>
				))}
			</VStack>
		);
	},
);
