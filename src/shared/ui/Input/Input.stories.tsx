import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Normal: Story = {
  args: {
    placeholder: "Введите текст",
    value: "Text",
  },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    placeholder: "Введите текст",
    value: "Text",
  },
};
