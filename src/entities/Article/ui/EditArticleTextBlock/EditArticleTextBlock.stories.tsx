import type { Meta, StoryObj } from "@storybook/react";

import { EditArticleTextBlock } from "./EditArticleTextBlock";

const meta: Meta<typeof EditArticleTextBlock> = {
  title: "shared/EditArticleTextBlock",
  component: EditArticleTextBlock,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditArticleTextBlock>;

export const Primary: Story = {
  args: {},
};
