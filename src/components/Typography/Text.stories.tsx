import React from "react"
import { Text } from "./Text"
import { StoryMeta, KindMeta } from "../../types/storybook"

export default {
  title: "Components/Typography/Text",
  component: Text
} as KindMeta<typeof Text>

export const standard: StoryMeta = () => <Text>Body Text</Text>

export const fontSizes: StoryMeta = () => (
  <>
    <Text fontSize={1}><b>Font Size 1</b></Text>
    <Text fontSize={2}><b>Font Size 2</b> (Body)</Text>
    <Text fontSize={3}><b>Font Size 3</b></Text>
    <Text fontSize={4}><b>Font Size 4</b></Text>
    <Text fontSize={5}><b>Font Size 5</b></Text>
    <Text fontSize={6}><b>Font Size 6</b></Text>
    <Text fontSize={7}><b>Font Size 7</b> (H1)</Text>
  </>
)

export const fontWeights: StoryMeta = () => (
  <>
    <Text fontWeight='light'>light</Text>
    <Text fontWeight='medium'>medium</Text>
    <Text fontWeight='semibold'>semibold</Text>
    <Text fontWeight='bold'>bold</Text>
    <Text fontWeight='black'>black</Text>
  </>
)

export const lineHeight: StoryMeta = () => (
  <>
    <Text lineHeight='none' bg="#eaeaea" pl={2}>none</Text>
    <Text lineHeight='tight' bg="#dadada" pl={2}>tight</Text>
    <Text lineHeight='snug' bg="#eaeaea" pl={2}>snug</Text>
    <Text lineHeight='normal' bg="#dadada" pl={2}>normal</Text>
    <Text lineHeight='relaxed' bg="#eaeaea" pl={2}>relaxed</Text>
    <Text lineHeight='loose' bg="#dadada" pl={2}>loose</Text>
  </>
)

export const letterSpacing: StoryMeta = () => (
  <>
    <Text letterSpacing='tighter'>tighter</Text>
    <Text letterSpacing='tight'>tight</Text>
    <Text letterSpacing='normal'>normal</Text>
    <Text letterSpacing='wide'>wide</Text>
    <Text letterSpacing='wider'>wider</Text>
    <Text letterSpacing='widest'>widest</Text>
  </>
)