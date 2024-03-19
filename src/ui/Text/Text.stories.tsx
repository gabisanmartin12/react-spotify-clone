import { Text } from "@/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Ui/Text",
};

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: "Some text",
  },
};

export default meta;
