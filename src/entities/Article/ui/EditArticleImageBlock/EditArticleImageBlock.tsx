import { type HTMLAttributes, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleImageBlock } from '../../model/types/article';

import { ToggleFeatures } from '@/shared/lib/features';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import {
	Text as TextDeprecated,
	TextAlign,
} from '@/shared/ui/deprecated/Text/Text';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text/Text';

import cls from './EditArticleImageBlock.module.scss';

type ImageBlockHTMLAttributes = Omit<HTMLAttributes<HTMLElement>, 'onChange'>;

interface EditArticleImageBlockProps extends ImageBlockHTMLAttributes {
	/** Дополнительные стили компонента. */
	className?: string;

	/** Определяет, находится ли блок в режиме редактирования. */
	isEdit: boolean;

	/** Текущий блок изображения статьи. */
	block: ArticleImageBlock;

	/** Обработчик изменения состояния блока. */
	onChangeBlockState: (editedBlock: ArticleImageBlock) => void;

	/** Устанавливает редактируемый блок изображения. */
	setEditBlock: (block: ArticleImageBlock) => void;

	/** Текущий редактируемый блок изображения статьи. */
	editBlock: ArticleImageBlock;
}

/**
 * Компонент для редактирования блока изображения статьи.
 *
 * Предоставляет пользовательский интерфейс для редактирования блока изображения статьи,
 * включая добавление и изменение изображения и его подписи.
 * Компонент также учитывает, находится ли приложение в режиме "редизайна",
 * и отображает соответствующие элементы интерфейса на основе этого состояния.
 *
 * @param {EditArticleImageBlockProps} props - Свойства компонента.
 */
export const EditArticleImageBlock = memo(
	(props: EditArticleImageBlockProps) => {
		const { t } = useTranslation();
		const {
			className,
			isEdit,
			block,
			editBlock,
			onChangeBlockState,
			setEditBlock,
			...otherProps
		} = props;

		const onChangeImage = (value: string) => {
			setEditBlock({
				...editBlock,
				src: value,
			});
		};

		const onChangeTitle = (value: string) => {
			setEditBlock({
				...editBlock,
				title: value,
			});
		};

		if (isEdit) {
			return (
				<div className={className} {...otherProps}>
					<div className={cls.preview}>
						<img
							src={editBlock.src}
							className={cls.img}
							alt={editBlock.title}
						/>
					</div>
					<ToggleFeatures
						name={'isAppRedesigned'}
						on={
							<>
								<Text text={t('Путь к изображению')} />
								<Input
									variant={'outlined'}
									value={editBlock?.src}
									onChange={onChangeImage}
								/>
								<Text text={t('Текст под изображением')} />
								<Input
									variant={'outlined'}
									value={editBlock?.title}
									onChange={onChangeTitle}
								/>
							</>
						}
						off={
							<>
								<TextDeprecated
									text={t('Путь к изображению')}
								/>
								<InputDeprecated
									theme={'outlined'}
									value={editBlock?.src}
									onChange={onChangeImage}
								/>
								<TextDeprecated
									text={t('Текст под изображением')}
								/>
								<InputDeprecated
									theme={'outlined'}
									value={editBlock?.title}
									onChange={onChangeTitle}
								/>
							</>
						}
					/>
				</div>
			);
		}

		return (
			<VStack gap={'16'} align={'center'} {...otherProps}>
				<img
					src={editBlock.src}
					className={cls.img}
					alt={editBlock.title}
				/>
				{editBlock.title && (
					<Text text={editBlock.title} align={TextAlign.CENTER} />
				)}
			</VStack>
		);
	},
);
