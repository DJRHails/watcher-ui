import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";

import { Spacer } from "./Spacer";

const story: KindMeta<typeof Spacer> = {
  title: "Components/Spacer",
  component: Spacer,
};

export const standard: StoryMeta = () => (
  <Spacer>Spacer</Spacer>
);

export default story;