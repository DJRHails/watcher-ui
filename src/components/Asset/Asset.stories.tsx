import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { Asset } from "../Asset";

const story: KindMeta<typeof Asset> = {
  title: "Components/Asset",
  component: Asset,
};

export const standard: StoryMeta = () => (
  <Asset name="Eth">Asset</Asset>
);

export default story;