import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { Spinner } from './Spinner';

const story: KindMeta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
};

export const standard: StoryMeta = () => (
  <Spinner/>
);

export default story;