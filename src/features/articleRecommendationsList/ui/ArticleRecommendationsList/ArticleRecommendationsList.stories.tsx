import type { Meta, StoryObj } from "@storybook/react";

import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

import { type Article } from "@/entities/Article";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
  id: "1",
  img: "",
  createdAt: "",
  views: 123,
  user: { id: "1", username: "asd" },
  blocks: [],
  type: [],
  title: "test",
  subtitle: "subtest",
};

export const Normal: Story = {
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
        ],
      },
    ],
  },
  args: {},
};
