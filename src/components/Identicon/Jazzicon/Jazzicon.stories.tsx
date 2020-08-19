import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { Jazzicon } from './Jazzicon';

const story: KindMeta<typeof Jazzicon> = {
  title: 'Components/Identicon/Jazzicon',
  component: Jazzicon,
};

export const standard: StoryMeta = () => (
  <>
    <Jazzicon seed={parseInt('67C3fD74fd', 16)}
    />
    <Jazzicon seed={parseInt('67C3fD74', 16)}
    />
   
  </>
);

export const maximumBase16: StoryMeta = () => (
  <>
    <Jazzicon seed={9007199254740991}
    />
    <Jazzicon seed={parseInt('FFFFFFFFFF', 16)}
    />
    <Jazzicon seed={parseInt('FFFFFFFF', 16)}
    />
    <Jazzicon seed={parseInt('FFFFFFF', 16)}
    />
  </>
);

export const maximumBase32: StoryMeta = () => (
  <>
    <Jazzicon seed={9007199254740991}
    />
    <Jazzicon seed={1.1}
    />
    <Jazzicon seed={2}
    />
    <Jazzicon seed={parseInt('7vvvvvvvvvv', 32)}
    />
    <Jazzicon seed={parseInt('vvvvvvvv', 32)}
    />
    <Jazzicon seed={parseInt('vvvvvvv', 32)}
    />
    <Jazzicon seed={parseInt('vvvvvv', 32)}
    />
    <Jazzicon seed={parseInt('vvvv', 32)}
    />
    <Jazzicon seed={parseInt('vv', 32)}
    />
  </>
);


export default story;