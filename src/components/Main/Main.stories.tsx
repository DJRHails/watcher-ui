import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";

import { Main } from "./Main";

const story: KindMeta<typeof Main> = {
  title: "Components/Main",
  component: Main,
};

export const standard: StoryMeta = () => (
  <Main>Main</Main>
);

export default story;