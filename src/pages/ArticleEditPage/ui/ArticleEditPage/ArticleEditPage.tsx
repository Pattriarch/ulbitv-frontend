import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { AddArticleForm } from "@/features/AddArticleForm";
import { EditArticleForm } from "@/features/EditArticleForm";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { Page } from "@/widgets/Page";

import cls from "./ArticleEditPage.module.scss";

export interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      {isEdit && id ? (
        <Text
          size={TextSize.L}
          title={`${t("Редактирование статьи с ID = ") + id}`}
        />
      ) : (
        <Text size={TextSize.L} title={t("Создание новой статьи")} />
      )}
      {isEdit && id && <EditArticleForm id={id} />}
      {!isEdit && <AddArticleForm />}
    </Page>
  );
});

export default ArticleEditPage;
