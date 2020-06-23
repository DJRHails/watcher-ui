import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";

import { Asset } from ".";
import { ETHERSCAN_NAMESPACE } from "../Icon/Icon";

const story: KindMeta<typeof Asset> = {
  title: "Components/Asset",
  component: Asset,
};

export const builtinSVG: StoryMeta = () => (
  <Asset name="Ethereum" ticker="ETH"/>
);

export const etherscan: StoryMeta = () => (
  <Asset name="Chai" ticker="CHAI" icon={{ name: ETHERSCAN_NAMESPACE + "chai" }}/>
);


export const platform: StoryMeta = () => (
  <Asset name="Ethereum" ticker="ETH" platform={{ name:"Eth" }}/>
);

export const fullAsset: StoryMeta = () => (
  <>
    <Asset name="Ethereum" ticker="ETH" full/>
  </>
);

export const platformWithAutomatic: StoryMeta = () => (
  <>
    <Asset name="fake" ticker="X" platform={{ name:"Eth" }}/>
    <Asset name="fake" ticker="XX" platform={{ name:"Eth" }}/>
    <Asset name="fake" ticker="XYZ" platform={{ name:"Eth" }}/>
    <Asset name="fake" ticker="XYZZ" platform={{ name:"Eth" }}/>
    <Asset name="fake" ticker="FOODX" platform={{ name:"Eth" }}/>
  </>
);

export default story;