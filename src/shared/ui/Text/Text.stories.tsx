import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextSize, TextTheme } from "./Text";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Normal: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description description lorem ipsun",
  },
};

export const Error: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description description lorem ipsun",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title lorem ipsun",
  },
};

export const onlyText: Story = {
  args: {
    text: "Description description lorem ipsun",
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Title lorem ipsun",
    text: "Description description lorem ipsun",
  },
};

export const onlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Title lorem ipsun",
  },
};

export const onlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    text: "Description description lorem ipsun",
  },
};

export const SizeS: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description description lorem ipsun",
    size: TextSize.S,
  },
};

export const SizeM: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description description lorem ipsun",
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description description lorem ipsun",
    size: TextSize.L,
  },
};
