import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';
import { Button } from '/components';

import { Asset } from '.';
import { ETHERSCAN_NAMESPACE } from '../Icon/Icon';

const story: KindMeta<typeof Asset> = {
  title: 'Components/Asset',
  component: Asset,
};

export const builtinSVG: StoryMeta = () => (
  <Asset name="Ethereum" ticker="ETH"/>
);

export const etherscan: StoryMeta = () => (
  <Asset name="Chai" ticker="CHAI" icon={{ name: ETHERSCAN_NAMESPACE + 'chai' }}/>
);


export const platform: StoryMeta = () => (
  <Asset name="Ethereum" ticker="ETH" platform="eth"/>
);

export const fullAsset: StoryMeta = () => (
  <>
    <Asset name="Ethereum" ticker="ETH" full/>
  </>
);

export const flippablePlatform: StoryMeta = () => {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <>
      <Asset name="Ethereum" ticker="ETH" platform="eth" flipped={flipped || undefined}/>
      <Button onClick={() => setFlipped(!flipped)}/>
    </>
  );
};



export const platformWithAutomatic: StoryMeta = () => (
  <>
    <Asset name="fake" ticker="X" platform="eth"/>
    <Asset name="fake" ticker="XX" platform="eth"/>
    <Asset name="fake" ticker="XYZ" platform="eth"/>
    <Asset name="fake" ticker="XYZZ" platform="eth"/>
    <Asset name="fake" ticker="FOODX" platform="eth"/>
  </>
);

export default story;