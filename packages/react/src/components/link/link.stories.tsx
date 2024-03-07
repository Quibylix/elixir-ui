import { Meta, StoryObj } from "@storybook/react";

import Link from ".";

const meta = {
  title: "Elixir UI / Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "secondary",
          "danger",
          "success",
          "warning",
          "info",
        ],
      },
      defaultValue: "default",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
      defaultValue: "md",
    },
    variant: {
      control: {
        type: "select",
        options: ["text", "outlined"],
      },
      defaultValue: "text",
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Link {...args} color="default">
        Default
      </Link>
      <Link {...args} color="primary">
        Primary
      </Link>
      <Link {...args} color="secondary">
        Secondary
      </Link>
      <Link {...args} color="danger">
        Danger
      </Link>
      <Link {...args} color="success">
        Success
      </Link>
      <Link {...args} color="warning">
        Warning
      </Link>
      <Link {...args} color="info">
        Info
      </Link>
    </div>
  ),
  args: {
    href: "https://google.com",
    external: true,
  },
};

export const Sizes: Story = {
  render: args => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Link {...args} size="sm" color="primary">
        Small
      </Link>
      <Link {...args} size="md" color="secondary">
        Medium
      </Link>
      <Link {...args} size="lg" color="danger">
        Large
      </Link>
    </div>
  ),
  args: {
    href: "https://google.com",
    external: true,
  },
};

export const Variants: Story = {
  render: args => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Link {...args} variant="outlined" color="secondary">
        Outlined
      </Link>
      <Link {...args} variant="text" color="primary">
        Text
      </Link>
    </div>
  ),
  args: {
    href: "https://google.com",
    external: true,
  },
};

export const FullWidth: Story = {
  args: {
    href: "https://google.com",
    external: true,
    fullWidth: true,
    children: "Full Width",
    color: "warning",
    variant: "outlined",
  },
};

export const WithAsProp: Story = {
  args: {
    as: "div",
    color: "success",
    variant: "outlined",
    fullWidth: true,
    children: "This is a Div",
  },
};
