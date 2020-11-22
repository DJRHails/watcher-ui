import React, { ReactNode } from 'react';
import { KindMeta, StoryMeta, StoryFnType } from '/types/storybook';

import { Nifty, NiftyMetadata } from './Nifty';
import { Flex, Button } from '/components';
import { randomHex } from '/utils';

const withCenterComponent: StoryFnType<any, ReactNode> = (context) => <Flex
  width="full"
  height="screenHeight"
  bg="surface"
  alignItems="center"
>
  {context?.()}
</Flex>;

const story: KindMeta<typeof Nifty> = {
  title: 'Components/Nifty',
  component: Nifty,
  decorators: [withCenterComponent],
};

const exampleMetadata: NiftyMetadata = {
  src: 'internal://',
  assetName: 'Artifact',
  assetId: '0x67C3..eE',
  owner: '0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE',

  // Optional Asset metadata
  assetTicker: 'ART',

  // Optional NiftyMetadata
  name: 'Gorilla',
  img: 'https://ipfs.io/ipfs/QmYe9Ngo3UBss48ud5Ny7byde3yXE1GeoWGuHH4oeekza6',
  bg: 'surface'
};

export const standard: StoryMeta = () => (
  <Nifty
    id={16}
    data={exampleMetadata}
    ratio={4 / 3}
    platform="eth"
  />
);

export const withTrackerId: StoryMeta = () => (
  <Nifty
    id={16}
    trackerId='0x67C3..eE'
    data={{
      assetName: 'MORPH',
      assetId: '0x67C3..eE',
      owner: randomHex(32),

      // Optional NiftyMetadata
      name: 'Steven',
      img: 'https://api.isomorph.network/1/morph/232323.svg',
      bg: 'surface'
    }}
    platform="eth"
  />
);

export const withTrackerExplorer: StoryMeta = () => (
  <Nifty
    id={16}
    trackerId='0x67C3..eE'
    trackerExplorer='https://rinkeby.etherscan.io/token/0x25634DF5d85aE48f3D2ed34Dc4870d618BAd7915'
    data={{
      assetName: 'MORPH',
      assetId: '0x67C3..eE',
      owner: randomHex(32),
      name: 'Ziggy',
      img: 'https://api.isomorph.network/1/morph/rand.svg',
      bg: 'surface'
    }}
    platform="eth"
  />
);

export const withPlatformChange: StoryMeta = () => (
  <Nifty
    id={16}
    platform="algo"
    trackerId='0x67C3..eE'
    trackerExplorer='https://rinkeby.etherscan.io/token/0x25634DF5d85aE48f3D2ed34Dc4870d618BAd7915'
    data={{
      assetName: 'MORPH',
      assetId: '0x67C3..eE',
      owner: randomHex(32),
      name: 'Ziggy',
      img: 'https://api.isomorph.network/1/morph/rand.svg',
      bg: 'surface'
    }}
  />
);

export const flippable: StoryMeta = () => {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <Nifty
      id={16}
      data={exampleMetadata}
      platform="eth"
      flipped={flipped || undefined}
    >
      <hr/>
      <Flex px={3} py={3}>
        <Button variant="gradient" onClick={() => setFlipped(!flipped)}>
          Transfer
        </Button>
      </Flex>
    </Nifty>

  );
};


export default story;