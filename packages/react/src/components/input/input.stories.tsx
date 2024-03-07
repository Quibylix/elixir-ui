import { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Elixir UI/Input",
  component: Input,
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
      options: ["outlined", "filled", "text"],
      defaultValue: "outlined",
    },
    label: {
      control: "text",
      defaultValue: "Label",
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: args => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Input {...args} color="default" placeholder="Default" />
      <Input {...args} color="primary" placeholder="Primary" />
      <Input {...args} color="secondary" placeholder="Secondary" />
      <Input {...args} color="danger" placeholder="Danger" />
      <Input {...args} color="success" placeholder="Success" />
      <Input {...args} color="warning" placeholder="Warning" />
      <Input {...args} color="info" placeholder="Info" />
    </div>
  ),
};

export const Variants: Story = {
  render: args => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Input
        {...args}
        color="primary"
        variant="outlined"
        placeholder="Outlined"
      />
      <Input
        {...args}
        color="secondary"
        variant="filled"
        placeholder="Filled"
      />
      <Input {...args} color="danger" variant="text" placeholder="Text" />
    </div>
  ),
};

export const Size: Story = {
  render: args => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Input {...args} color="success" size="sm" placeholder="Small" />
      <Input {...args} color="warning" size="md" placeholder="Medium" />
      <Input {...args} color="info" size="lg" placeholder="Large" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    placeholder: "With label",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: "Full width",
    color: "primary",
  },
};

export const Disabled: Story = {
  render: args => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Input {...args} color="default" placeholder="Default" />
      <Input {...args} color="primary" placeholder="Primary" />
      <Input
        {...args}
        variant="filled"
        color="secondary"
        placeholder="Secondary"
      />
      <Input {...args} variant="filled" color="danger" placeholder="Danger" />
      <Input {...args} variant="text" color="success" placeholder="Success" />
      <Input {...args} variant="text" color="warning" placeholder="Warning" />
      <Input {...args} variant="text" color="info" placeholder="Info" />
    </div>
  ),
  args: {
    disabled: true,
  },
};
