import React, { ReactNode } from 'react';
import { KindMeta, StoryMeta, StoryFnType } from '/types/storybook';

import { Nifty, NiftyMetadata } from './Nifty';
import { Flex, Button } from '/components';

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

export const ARRtistryNiftyMetadata: NiftyMetadata = {
  src: 'internal://',
  assetName: 'Artifact',
  assetId: 16,
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
    data={ARRtistryNiftyMetadata}
    platform="eth"
  />
);

export const flippable: StoryMeta = () => {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <Nifty
      id={16}
      data={ARRtistryNiftyMetadata}
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