import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { AnyFunction } from '/types/utils';
import TransactionConfirmation from './TransactionConfirmation';
import { useDisclosure } from '/utils/hooks';
import { WatcherProvider } from '../WatcherProvider';

const story: KindMeta<typeof TransactionConfirmation> = {
  title: 'Components/Transaction/Confirmation',
  component: TransactionConfirmation,
  decorators: [
    (Story: AnyFunction) => (
      <WatcherProvider>
        <Story/>
      </WatcherProvider>
    ),
  ]
};

export const minimal: StoryMeta = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <TransactionConfirmation
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default story;