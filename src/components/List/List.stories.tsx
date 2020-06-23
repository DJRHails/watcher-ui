import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";
import { List, ListItem, ListIcon } from "/components";

const story: KindMeta<typeof List> = {
  title: "Components/List",
  component: List,
};

export const bulletList: StoryMeta = () => (
  <List styleType="disc" p={3}>
    <ListItem>Foo</ListItem>
    <ListItem>Bar</ListItem>
    <ListItem>Zoo</ListItem>
  </List>
);

export const orderedList: StoryMeta = () => (
  <List as="ol" styleType="decimal">
    <ListItem>Foo</ListItem>
    <ListItem>Bar</ListItem>
    <ListItem>Zoo</ListItem>
  </List>
);

export const withIcons: StoryMeta = () => (
  <List spacing={3} my={4}>
    <ListItem>
      <ListIcon name="CheckCircle" color="success" />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </ListItem>
    <ListItem>
      <ListIcon name="CheckCircle" color="success" />
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
    </ListItem>
    <ListItem variant="check">
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </ListItem>
    <ListItem variant="cross">
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </ListItem>
  </List>
);

export default story;