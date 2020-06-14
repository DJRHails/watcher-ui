// tslint:disable-next-line:no-implicit-dependencies
import { action } from "@storybook/addon-actions"
import React from "react"
import { Button } from "../Button"
import { StoryMeta } from "../../types/storybook"

export default {
  title: "Components/Button",
  component: Button
}

export const Text: StoryMeta = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
)

export const Emoji: StoryMeta = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
