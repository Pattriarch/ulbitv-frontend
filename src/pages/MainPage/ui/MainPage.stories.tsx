// eslint-disable-next-line ulbitv-fsd/layer-imports-validator
import "@/app/styles/index.scss";
import type { Meta, StoryObj } from "@storybook/react";

import MainPage from "./MainPage";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
  decorators: [StoreDecorator({})],
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
