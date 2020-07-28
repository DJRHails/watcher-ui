import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { OpinionCard } from './OpinionCard';
import { Text, Flex } from '/components';

const story: KindMeta<typeof OpinionCard> = {
  title: 'Components/Card/OpinionCard',
  component: OpinionCard,
};

export const doCard: StoryMeta = () => (
  <Flex
    width="full"
    minHeight="calc(100vh - 16px)"
    bg="surface"
    alignItems="center"
  >
    <OpinionCard>
      <Text fontSize={1} as="p" mb={2}>
        Use specific language throughout. If the transaction is actually transfering a crypto asset, refer to that. Or if your users are casting a vote on the blockchain, reference the vote. This will spare users having to make connections in their head. 
      </Text>
      <Text fontSize={1} as="p">
      Echo the language you&apos;d use in the button to initiate the transaction e.g. Send Cryptokitty or Cast vote.
      </Text>
    </OpinionCard>
  </Flex>
);

export const dontCard: StoryMeta = () => (
  <Flex
    width="full"
    minHeight="calc(100vh - 16px)"
    bg="surface"
    alignItems="center"
  >
    <OpinionCard variant="dont">
      <Text fontSize={1} as="p" mb={2}>
        Use specific language throughout. If the transaction is actually transfering a crypto asset, refer to that. Or if your users are casting a vote on the blockchain, reference the vote. This will spare users having to make connections in their head. 
      </Text>
      <Text fontSize={1} as="p">
      Echo the language you&apos;d use in the button to initiate the transaction e.g. Send Cryptokitty or Cast vote.
      </Text>
    </OpinionCard>
  </Flex>
);
export default story;