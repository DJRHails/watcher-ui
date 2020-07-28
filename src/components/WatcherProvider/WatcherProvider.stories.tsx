import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { WatcherProvider } from './WatcherProvider';

const story: KindMeta<typeof WatcherProvider> = {
  title: 'Components/WatcherProvider',
  component: WatcherProvider,
};

export const standard: StoryMeta = () => (
  <WatcherProvider>WatcherProvider</WatcherProvider>
);

export default story;