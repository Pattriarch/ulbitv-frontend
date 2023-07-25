import { ArticleBlockType, ArticleType } from "../../consts/articleConsts";

import { type AuthData } from "@/entities/User";

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
  order: number;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface Article {
  id?: string;
  title?: string;
  user?: AuthData;
  subtitle?: string;
  img?: string;
  views?: number;
  createdAt?: string;
  type?: ArticleType[];
  blocks?: ArticleBlock[];
}
