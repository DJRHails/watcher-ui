import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { Icon } from "../Icon";

const story: KindMeta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
};

export const rimble: StoryMeta = () => (
  <Icon name="Eth"/>
);

export const etherscan: StoryMeta = () => (
  <Icon name="Chai"/>
);

export const algorand: StoryMeta = () => (
  <Icon name="Algo"/>
);

export default story;