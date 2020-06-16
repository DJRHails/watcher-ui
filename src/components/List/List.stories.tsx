import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { List } from "../List";

const story: KindMeta<typeof List> = {
  title: "Components/List",
  component: List,
};

export const standard: StoryMeta = () => (
  <List>List</List>
);

export default story;