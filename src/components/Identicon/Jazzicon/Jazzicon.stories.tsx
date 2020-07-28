import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { Jazzicon } from './Jazzicon';

const story: KindMeta<typeof Jazzicon> = {
  title: 'Components/Identicon/Jazzicon',
  component: Jazzicon,
};

export const standard: StoryMeta = () => (
  <Jazzicon address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE"
  />
);

export default story;