import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { AnyFunction } from '/types/utils';
import { PortalManager } from '../Portal';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';
import TransactionStarted from './TransactionStarted';
import moment from 'moment';
import { useDisclosure } from '/utils/hooks';
import { randomEthereumAddress, shortenEthereumAddress } from '/utils/eth';

const story: KindMeta<typeof TransactionStarted> = {
  title: 'Components/Transaction/Started',
  component: TransactionStarted,
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
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: true });
  
  const Cost = () => <>
    0.23 ETH
  </>;
  const transactionHash = '0x85b0ca3ed80e1ea89965b51ddf42764caad016c235a4d6bb9f81f83fff1a83d5';
  const tx = {
    to: shortenEthereumAddress(randomEthereumAddress()),
    from: shortenEthereumAddress(randomEthereumAddress()),
    externalLink: `https://rinkeby.etherscan.io/tx/${transactionHash}`,
    cost: <Cost/>,
    startTime: moment(),
    delay: moment.duration(10, 'seconds'),
  };
  return (
    <>
      <TransactionStarted
        transaction={tx}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default story;