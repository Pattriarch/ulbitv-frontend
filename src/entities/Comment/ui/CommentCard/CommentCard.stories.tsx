import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof CommentCard> = {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    comment: {
      id: "1",
      text: "hey!",
      user: {
        id: "1",
        username: "Misha",
      },
    },
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comment: {
      id: "1",
      text: "hey!",
      user: {
        id: "1",
        username: "Misha",
      },
    },
  },
};

export const Loading: Story = {
  decorators: [],
  args: {
    comment: {
      id: "1",
      text: "hey!",
      user: {
        id: "1",
        username: "Misha",
      },
    },
    isLoading: true,
  },
};

export const LoadingDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comment: {
      id: "1",
      text: "hey!",
      user: {
        id: "1",
        username: "Misha",
      },
    },
    isLoading: true,
  },
};
