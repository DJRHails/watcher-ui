import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { AspectRatio } from './AspectRatio';
import { Box, Image } from '/components';

const story: KindMeta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
};

export const fourByThree: StoryMeta = () => (
  <AspectRatio>
    <Image
      src="https://source.unsplash.com/random/1024x768"
    />
  </AspectRatio>
);

export const square: StoryMeta = () => (
  <AspectRatio ratio={1}>
    <Image
      src="https://source.unsplash.com/random/1024x768"
    />
  </AspectRatio>
);

export const responsiveSquare: StoryMeta = () => (
  <AspectRatio ratio={1} maxWidth="full">
    <Image
      src="https://source.unsplash.com/random/1024x768"
    />
  </AspectRatio>
);

export const redSquare: StoryMeta = () => (
  <AspectRatio ratio={1}>
    <Box backgroundColor="red" />
  </AspectRatio>
);


export default story;