import React from 'react';
import { Image } from '../Image';
import { StoryMeta } from '/types/storybook';

export default {
  title: 'Components/Image',
  component: Image
};

export const responsive: StoryMeta = () => (
  <Image
    src="https://source.unsplash.com/random/1024x768"
    sx={{
      width: ['100%', '50%'],
      borderRadius: 'lg'
    }}
  />
);
