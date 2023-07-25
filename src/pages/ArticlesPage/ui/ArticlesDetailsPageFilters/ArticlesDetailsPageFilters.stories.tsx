import type { Meta, StoryObj } from "@storybook/react";

import { ArticlesDetailsPageFilters } from "./ArticlesDetailsPageFilters";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ArticlesDetailsPageFilters> = {
  title: "pages/Article/ArticlesDetailsPageFilters",
  component: ArticlesDetailsPageFilters,
  tags: ["autodocs"],
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesDetailsPageFilters>;

export const Primary: Story = {
  args: {},
};
