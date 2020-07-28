import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { StackDivider } from './StackDivider';

const story: KindMeta<typeof StackDivider> = {
  title: 'Components/Stack/StackDivider',
  component: StackDivider,
};

export const standard: StoryMeta = () => (
  <StackDivider/>
);

export default story;