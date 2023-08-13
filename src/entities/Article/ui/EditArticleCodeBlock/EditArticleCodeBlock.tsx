import { type HTMLAttributes, memo } from 'react';

import { type ArticleCodeBlock } from '../../model/types/article';

import { ToggleFeatures } from '@/shared/lib/features';
import { Textarea as TextareaDeprecated } from '@/shared/ui/deprecated/Textarea';
import { Code } from '@/shared/ui/redesigned/Code';
import { Textarea } from '@/shared/ui/redesigned/Textarea';

import cls from './EditArticleCodeBlock.module.scss';

type CodeBlockHTMLAttributes = Omit<HTMLAttributes<HTMLElement>, 'onChange'>;

interface EditArticleCodeBlockProps extends CodeBlockHTMLAttributes {
	/** Дополнительные стили компонента. */
	className?: string;

	/** Определяет, находится ли блок в режиме редактирования. */
	isEdit: boolean;

	/** Текущий блок кода статьи. */
	block: ArticleCodeBlock;

	/** Обработчик изменения состояния блока. */
	onChangeBlockState: (editedBlock: ArticleCodeBlock) => void;

	/** Устанавливает редактируемый блок кода. */
	setEditBlock: (block: ArticleCodeBlock) => void;

	/** Текущий редактируемый блок кода статьи. */
	editBlock: ArticleCodeBlock;
}

/**
 * Компонент для редактирования блока кода статьи.
 *
 * Предоставляет пользовательский интерфейс для редактирования блока кода статьи,
 * включая возможность редактирования самого кода.
 * Компонент также учитывает, находится ли приложение в режиме "редизайна",
 * и отображает соответствующие элементы интерфейса на основе этого состояния.
 *
 * @param {EditArticleCodeBlockProps} props - Свойства компонента.
 */
export const EditArticleCodeBlock = memo((props: EditArticleCodeBlockProps) => {
	const {
		className,
		isEdit,
		block,
		editBlock,
		onChangeBlockState,
		setEditBlock,
		...otherProps
	} = props;

	const onChangeCode = (value: string) => {
		setEditBlock({
			...editBlock,
			code: value,
		});
	};

	if (isEdit) {
		return (
			<>
				<ToggleFeatures
					name={'isAppRedesigned'}
					on={
						<Textarea
							className={cls.title}
							variant={'outlined'}
							value={editBlock.code}
							onChange={onChangeCode}
							{...otherProps}
						/>
					}
					off={
						<TextareaDeprecated
							className={cls.title}
							theme={'outlined'}
							value={editBlock.code}
							onChange={onChangeCode}
							{...otherProps}
						/>
					}
				/>
			</>
		);
	}

	return <Code {...otherProps} withCopyIcon={false} text={editBlock.code} />;
});
