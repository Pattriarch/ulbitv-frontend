import { type HTMLAttributes, memo, useState } from "react";

import { type ArticleImageBlock } from "../../model/types/article";

import CancelIcon from "@/shared/assets/icons/cancel-512-512.svg";
import EditIcon from "@/shared/assets/icons/edit-512-512.svg";
import MarkIcon from "@/shared/assets/icons/mark-512-512.svg";
import MoveIcon from "@/shared/assets/icons/move-512-512.svg";
import { classNames, type Mods } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Text, TextAlign } from "@/shared/ui/Text/Text";

import cls from "./EditArticleImageBlock.module.scss";

interface EditArticleImageBlockProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  block: ArticleImageBlock;
  onChangeBlockState: (editedBlock: ArticleImageBlock) => void;
}

export const EditArticleImageBlock = memo(
  (props: EditArticleImageBlockProps) => {
    const { className, block, onChangeBlockState, ...otherProps } = props;

    const [imageBlock, setImageBlock] = useState(block);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const onClickEditIcon = () => setIsEdit(true);

    const onClickCancelIcon = () => {
      setIsEdit(false);
      setImageBlock(block);
    };

    const onClickMarkIcon = () => {
      setIsEdit(false);
      onChangeBlockState(imageBlock);
    };

    const onChangeImage = (value: string) => {
      setImageBlock(() => {
        return {
          ...imageBlock,
          src: value,
        };
      });
    };

    const onChangeTitle = (value: string) => {
      setImageBlock(() => {
        return {
          ...imageBlock,
          title: value,
        };
      });
    };

    const mods: Mods = {
      [cls.draggable]: !isEdit,
    };

    if (isEdit) {
      return (
        <div
          className={classNames(cls.EditArticleImageBlock, mods, [className])}
          draggable={!isEdit}
          {...otherProps}
        >
          <MarkIcon
            onClick={onClickMarkIcon}
            className={classNames(cls.icon, {}, [cls.markIcon])}
          />
          <CancelIcon
            onClick={onClickCancelIcon}
            className={classNames(cls.icon, {}, [cls.cancelIcon])}
          />
          <img
            src={imageBlock.src}
            className={cls.preview}
            alt={imageBlock.title}
          />
          <Text text={"Путь к изображению"} />
          <Input
            theme={"outlined"}
            value={imageBlock?.src}
            onChange={onChangeImage}
          />
          <Text text={"Текст под изображенением"} />
          <Input
            theme={"outlined"}
            value={imageBlock?.title}
            onChange={onChangeTitle}
          />
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.EditArticleImageBlock, mods, [className])}
        draggable={!isEdit}
        {...otherProps}
      >
        <EditIcon
          onClick={onClickEditIcon}
          className={classNames(cls.icon, {}, [cls.editIcon])}
        />
        <MoveIcon className={classNames(cls.icon, {}, [cls.moveIcon])} />
        <img src={imageBlock.src} className={cls.img} alt={imageBlock.title} />
        {imageBlock.title && (
          <Text text={imageBlock.title} align={TextAlign.CENTER} />
        )}
      </div>
    );
  }
);
