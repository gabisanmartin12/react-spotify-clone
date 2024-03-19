import { Text, TextVariant } from "@/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  component: Text,
  argTypes: {
    variant: {
      options: TextVariant,
      control: { type: "select" },
    },
  },
  title: "Ui/Text",
};

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: "Some text",
    variant: "heading1",
  },
};

export default meta;
