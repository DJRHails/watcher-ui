import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { AnyFunction } from '/types/utils';
import { PortalManager } from '../Portal';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';
import TransactionFailure from './TransactionFailure';
import { randomAddress } from '../Identicon/Identicon.stories';
import moment from 'moment';
import { useDisclosure } from '/utils/hooks';

const story: KindMeta<typeof TransactionFailure> = {
  title: 'Components/Transaction/Failure',
  component: TransactionFailure,
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
  const tx = {
    to: randomAddress(),
    from: randomAddress(),
    externalLink: 'https://etherscan.io/tx/0x6b77ce94c57fe98b570194f09a02449251f5f1c60e566784a3af46fff39c9b85',
    cost: 3,
    startTime: moment(),
  };
  return (
    <>
      <TransactionFailure
        transaction={tx}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default story;