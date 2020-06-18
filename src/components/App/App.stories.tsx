import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { App } from "./App";

const story: KindMeta<typeof App> = {
  title: "Components/App",
  component: App,
};

export const standard: StoryMeta = () => (
  <App>App</App>
);

export default story;