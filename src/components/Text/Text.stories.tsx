import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";
import { withKnobs, select, text } from "@storybook/addon-knobs";

import { Text } from "./Text";
import { Theme } from "styled-system";
import theme from "../../themes/theme";

const story: KindMeta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  decorators: [withKnobs]
};

const themeKeys = (key: keyof Theme) => Object.keys(theme[key] || {});

export const editable: StoryMeta = () => {
  const txt=text("Text", "A QUICK BROWN FOX JUMPS OVER THE LAZY DOG while the five boxing wizards jump quickly.");
  const font=select("Font Family", themeKeys("fonts"), "body");
  const fontSize=select("Font Size", themeKeys("fontSizes"), undefined);
  const fontWeight=select("Font Weight", themeKeys("fontWeights"), "medium");
  const lineHeight=select("Line Height", themeKeys("lineHeights"), "normal");
  const letterSpacing=select("Letter Spacings", themeKeys("letterSpacings"), "normal");

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
    <Text fontSize={1}><b>Font Size 1</b> (Body)</Text>
    <Text fontSize={2}><b>Font Size 2</b></Text>
    <Text fontSize={3}><b>Font Size 3</b></Text>
    <Text fontSize={4}><b>Font Size 4</b></Text>
    <Text fontSize={5}><b>Font Size 5</b></Text>
    <Text fontSize={6}><b>Font Size 6</b> (H1)</Text>
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
export default story;