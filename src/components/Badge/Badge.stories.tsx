import React from "react"
import { Badge } from "../Badge"
import { Text } from "../Typography"
import { StoryMeta } from "../../types/storybook"

export default {
  title: "Components/Badge",
  component: Badge
}

export const Brand: StoryMeta = () => (
  <Badge>Brand</Badge>
)
export const Success: StoryMeta = () => (
  <Badge variantColor="success">Success</Badge>
)

export const Large: StoryMeta = () => (
  <Text fontSize={3} fontWeight="bold">
    Daniel Hails
    <Badge ml={1} variantColor="success">New</Badge>
  </Text>
)
