import type { Meta, StoryObj } from "@storybook/react";

import { ListBox } from "./ListBox";

const meta: Meta<typeof ListBox> = {
  title: "shared/ListBox",
  component: ListBox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
  args: {
    value: "123",
    items: [
      {
        content: "lae123",
        value: "123",
      },
      {
        content: "asdascasc",
        value: "1232",
      },
    ],
  },
};

export const TopLeft: Story = {
  args: {
    value: "123",
    direction: "topLeft",
    items: [
      {
        content: "lae123",
        value: "123",
      },
      {
        content: "asdascasc",
        value: "1232",
      },
    ],
  },
};

export const TopRight: Story = {
  args: {
    value: "123",
    direction: "topRight",
    items: [
      {
        content: "lae123",
        value: "123",
      },
      {
        content: "asdascasc",
        value: "1232",
      },
    ],
  },
};

export const BottomLeft: Story = {
  args: {
    value: "123",
    direction: "bottomLeft",
    items: [
      {
        content: "lae123",
        value: "123",
      },
      {
        content: "asdascasc",
        value: "1232",
      },
    ],
  },
};

export const BottomRight: Story = {
  args: {
    value: "123",
    direction: "bottomRight",
    items: [
      {
        content: "lae123",
        value: "123",
      },
      {
        content: "asdascasc",
        value: "1232",
      },
    ],
  },
};
