import type { Meta, StoryObj } from "@storybook/react";

import { ArticleTypeTabs } from "./ArticleTypeTabs";

const meta: Meta<typeof ArticleTypeTabs> = {
  title: "features/ArticleTypeTabs",
  component: ArticleTypeTabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Normal: Story = {
  args: {},
};
