// tslint:disable-next-line:no-implicit-dependencies
import { action } from "@storybook/addon-actions";
import React from "react";
import { Button } from "./Button";
import { StoryMeta } from "/types/storybook";
import { Badge, Flex } from "/components";

export default {
  title: "Components/Button",
  component: Button,
};

export const fullSize: StoryMeta = () => (
  <Button width="full">Hello Button</Button>
);

export const sizes: StoryMeta = () => (
  <>
    <Button size="sm">Hello Button</Button>
    <Button size="md">Hello Button</Button>
    <Button size="lg">Hello Button</Button>
  </>
);

export const Emoji: StoryMeta = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const randomColor: StoryMeta = () => (
  <Button buttonColor={"#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}>
    Random Button
  </Button>
);

export const outline: StoryMeta = () => (
  <Button variant="outline" onClick={action("clicked")}>
    Outline Button
  </Button>
);

export const pinkOutline: StoryMeta = () => (
  <Button variant="outline" buttonColor="pink" onClick={action("clicked")}>
    Outline Button
  </Button>
);

export const notifications: StoryMeta = () => (
  <Button>
    Notifications <Badge ml={1}>4</Badge>
  </Button>
);

export const text: StoryMeta = () => (
  <Button variant="text">
    Text Button
  </Button>
);

export const gradient: StoryMeta = () => (
  <Button variant="gradient">
    Text Button
  </Button>
);


export const pair: StoryMeta = () => (
  <Flex>
    <Button buttonColor="badge.success" textColor="success" onClick={action("clicked")}>
      Accept
    </Button>
    {/* <Box ml={5}/> */}
    <Button ml={3} variant="outline" buttonColor="danger" textColor="muted" onClick={action("clicked")}>
      Cancel
    </Button>
  </Flex>
);
