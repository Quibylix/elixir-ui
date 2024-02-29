import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Elixir UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
  },
};
