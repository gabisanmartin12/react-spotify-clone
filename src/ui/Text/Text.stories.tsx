import { Text, TextVariant } from "@/ui";
import { Subtitle, Title, Typeset } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  argTypes: {
    variant: {
      control: { type: "select" },
      options: TextVariant,
    },
  },
  component: Text,
  parameters: {
    controls: {
      exclude: ["as"],
    },
    docs: {
      docsMode: true,
      page: () => (
        <>
          <Title>Typography</Title>

          <Subtitle>Circular Spotify Text</Subtitle>
          <Typeset
            fontWeight={600}
            sampleText="Heading"
            fontFamily="CircularSpotifyText"
            fontSizes={["48px", "40px", "32px", "28px", "24px", "20px"]}
          />

          <Subtitle>Sf Pro Text</Subtitle>
          <Typeset
            fontWeight={400}
            sampleText="Text"
            fontFamily="SfProText"
            fontSizes={["20px", "18px", "16px", "14px", "12px"]}
          />

          <Subtitle>Sf Pro Text Bold</Subtitle>
          <Typeset
            fontWeight={600}
            sampleText="Text"
            fontFamily="SfProText"
            fontSizes={["20px", "18px", "16px", "14px", "12px"]}
          />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  title: "Ui/Text",
};

type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: "Play with me",
    variant: "body1",
  },
};

export default meta;
