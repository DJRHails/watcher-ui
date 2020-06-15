import React from "react"
import { StoryMeta } from "../../types/storybook"
import { Flex } from "reflexbox/styled-components"
import { TokenCard } from "./TokenCard"
import { text, number, withKnobs } from "@storybook/addon-knobs"

export default {
  title: "Components/TokenCard",
  component: TokenCard,
  decorators: [withKnobs],
}


export const tokenCard: StoryMeta = () => (
  <TokenCard
    p={4}
    name={text("Token Code", "Eth")}
    quantity={number("Quantity", 1.5)}
    value={number("Value", 1.5)} />
)

export const tokenCardList: StoryMeta = () => (
  <Flex ml={-2}>
    <TokenCard
      ml={2}
      name="Eth"
      quantity={1.5}
      value={348.11} />
    <TokenCard
      ml={2}
      name="Ant"
      quantity={588}
      value={648.22} />
    <TokenCard
      ml={2}
      name="Bcc"
      quantity={500}
      value={-1} />
    <TokenCard
      ml={2}
      name="Dai"
      quantity={1000}
      value={1005.03} />
    <TokenCard
      ml={3}
      name="Mana"
      quantity={501}
      value={20.59} />
  </Flex>
)
