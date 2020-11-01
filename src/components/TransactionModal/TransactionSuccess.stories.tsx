import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { AnyFunction } from '/types/utils';
import { PortalManager } from '../Portal';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';
import TransactionSuccess from './TransactionSuccess';
import { useDisclosure } from '/utils/hooks';
import { Nifty, Box, Asset } from '..';
import { ARRtistryNiftyMetadata } from '../Nifty/Nifty.stories';

const story: KindMeta<typeof TransactionSuccess> = {
  title: 'Components/Transaction/Success',
  component: TransactionSuccess,
  decorators: [
    (Story: AnyFunction) => (
      <PortalManager>
        <Story/>
      </PortalManager>
    ),
    (Story: AnyFunction) => (
      <ThemeProvider theme={theme}>
        <Story/>
      </ThemeProvider>
    )
  ]
};

export const minimal: StoryMeta = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <TransactionSuccess
        isOpen={isOpen}
        onClose={onOpen}
        onOpen={onClose}
      >
        Transfer succeeded!
      </TransactionSuccess>
    </>
  );
};

export const nifty: StoryMeta = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <TransactionSuccess
        isOpen={isOpen}
        onClose={onOpen}
        onOpen={onClose}
      >
        Perfect! They should have their new NFT in their wallet.

        <Box width={1/2} py={5} mx="auto">
          <Nifty
            id={16}
            data={ARRtistryNiftyMetadata}
            platform="eth"
          />
        </Box>
        
      </TransactionSuccess>
    </>
  );
};

export const token: StoryMeta = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <TransactionSuccess
        isOpen={isOpen}
        onClose={onOpen}
        onOpen={onClose}
      >
        Perfect! They should have their token in their wallet.

        <Box p={10} m="auto">
          <Asset name="Ethereum" ticker="ETH" full/>
        </Box>
        
      </TransactionSuccess>
    </>
  );
};

export default story;