import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Elixir UI/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "danger",
        "success",
        "warning",
        "info",
      ],
      defaultValue: "default",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "text"],
      defaultValue: "solid",
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Info: Story = {
  args: {
    color: "info",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Solid: Story = {
  args: {
    color: "default",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    color: "primary",
    size: "md",
    variant: "outlined",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    color: "secondary",
    size: "md",
    variant: "ghost",
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    color: "danger",
    size: "md",
    variant: "text",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    color: "success",
    size: "sm",
    variant: "solid",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    color: "warning",
    size: "md",
    variant: "solid",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    color: "info",
    size: "lg",
    variant: "solid",
    children: "Button",
  },
};

export const FullWidth: Story = {
  args: {
    color: "default",
    size: "md",
    variant: "solid",
    children: "Button",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    color: "primary",
    size: "md",
    variant: "solid",
    children: "Button",
    disabled: true,
  },
};
