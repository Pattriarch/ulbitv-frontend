import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import AddCommentForm from "./AddCommentForm";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AddCommentForm> = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
  decorators: [StoreDecorator({})],
  args: {
    onSendComment: action("onSendComment"),
  },
};

export const Dark: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
  args: {
    onSendComment: action("onSendComment"),
  },
};
