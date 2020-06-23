import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { Identicon } from "./Identicon";

const story: KindMeta<typeof Identicon> = {
  title: "Components/Identicon",
  component: Identicon,
};

export const ethereum: StoryMeta = () => (
  <Identicon        
    address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE"
  />
);

export const ethereumWithAutomaticPlatform: StoryMeta = () => (
  <Identicon        
    address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE"
    platform
  />
);

export const ethereumWithManualPlatform: StoryMeta = () => (
  <Identicon        
    address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE"
    m={3}
    platform={{
      name: "Algo",
    }}
  />
);


export const algorand: StoryMeta = () => (
  <Identicon
    address="HAILSN476AQKWQ46TSIG4XGOCBLGG2CICATHB6YCAWN4SQNGH66QDKHGPQ"
  />
);

export default story;