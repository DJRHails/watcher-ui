import React from "react";
import { Text } from "./Text";
import { StoryMeta, KindMeta } from "../../types/storybook";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import theme from "../../themes/theme";

export default {
  title: "Components/Typography/Text",
  component: Text,
  decorators: [withKnobs]
} as KindMeta<typeof Text>;

export const standard: StoryMeta = () => {
  const txt=text("Text", "A QUICK BROWN FOX JUMPS OVER THE LAZY DOG while the five boxing wizards jump quickly.");
  const font=select("Font Family", Object.keys(theme.fonts), "body");
  const fontSize=select("Font Size", Object.keys(theme.fontSizes), undefined);
  const fontWeight=select("Font Weight", Object.keys(theme.fontWeights), "medium");
  const lineHeight=select("Line Height", Object.keys(theme.lineHeights), "normal");
  const letterSpacing=select("Letter Spacings", Object.keys(theme.letterSpacings), "normal");

  return (
    <Text
      fontFamily={font}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
    >
      {txt}
    </Text>
  );
};

export const fontSizes: StoryMeta = () => (
  <>
    <Text fontSize={0}><b>Font Size 0</b></Text>
    <Text fontSize={1}><b>Font Size 1</b></Text>
    <Text fontSize={2}><b>Font Size 2</b> (Body)</Text>
    <Text fontSize={3}><b>Font Size 3</b></Text>
    <Text fontSize={4}><b>Font Size 4</b></Text>
    <Text fontSize={5}><b>Font Size 5</b></Text>
    <Text fontSize={6}><b>Font Size 6</b></Text>
    <Text fontSize={7}><b>Font Size 7</b> (H1)</Text>
    <Text fontSize={8}><b>Font Size 8</b></Text>
  </>
);

export const fontWeights: StoryMeta = () => (
  <>
    <Text fontWeight='light'>light</Text>
    <Text fontWeight='medium'>medium</Text>
    <Text fontWeight='semibold'>semibold</Text>
    <Text fontWeight='bold'>bold</Text>
    <Text fontWeight='black'>black</Text>
  </>
);

export const lineHeight: StoryMeta = () => (
  <>
    <Text lineHeight='none' bg="#eaeaea" pl={2}>none</Text>
    <Text lineHeight='tight' bg="#dadada" pl={2}>tight</Text>
    <Text lineHeight='snug' bg="#eaeaea" pl={2}>snug</Text>
    <Text lineHeight='normal' bg="#dadada" pl={2}>normal</Text>
    <Text lineHeight='relaxed' bg="#eaeaea" pl={2}>relaxed</Text>
    <Text lineHeight='loose' bg="#dadada" pl={2}>loose</Text>
  </>
);

export const letterSpacing: StoryMeta = () => (
  <>
    <Text letterSpacing='tighter'>tighter</Text>
    <Text letterSpacing='tight'>tight</Text>
    <Text letterSpacing='normal'>normal</Text>
    <Text letterSpacing='wide'>wide</Text>
    <Text letterSpacing='wider'>wider</Text>
    <Text letterSpacing='widest'>widest</Text>
  </>
);