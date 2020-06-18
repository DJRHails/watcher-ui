import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { Asset } from ".";

const story: KindMeta<typeof Asset> = {
  title: "Components/Asset",
  component: Asset,
};

export const builtinSVG: StoryMeta = () => (
  <Asset name="Eth">Asset</Asset>
);

export const etherscan: StoryMeta = () => (
  <Asset name="Chai">Asset</Asset>
);


export const platform: StoryMeta = () => (
  <Asset name="Eth" platform="Eth">Asset</Asset>
);


export default story;