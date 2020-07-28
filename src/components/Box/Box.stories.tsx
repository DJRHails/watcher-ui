import React from 'react';
import { Box } from './Box';
import { StoryMeta } from '/types/storybook';

export default {
  title: 'Components/Box',
  component: Box
};

export const list: StoryMeta = () => (
  <>
    <Box width="full" height={16} bg="brand" m={1} />
    <Box width="full" height={16} bg="brand" m={1} />
    <Box width="full" height={16} bg="brand" m={1} />
    <Box width="full" height={16} bg="brand" m={1} />
  </>
);

export const withColor: StoryMeta = () => (
  <Box p={3} color="brand" backgroundColor="background">
    Brand Colour on Surface
  </Box>
);

export const withResponsive: StoryMeta = () => (
  <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="brand">
    Box
  </Box>
);

export const backgroundImageCard: StoryMeta = () => (
  <Box
    sx={{
      px: 4,
      py: 6,
      backgroundImage: 'url(https://source.unsplash.com/random/1024x768?sky)',
      backgroundSize: 'cover',
      borderRadius: 'lg',
      color: 'white',
      bg: 'gray',
      textAlign: 'center',
      fontSize: 6,
    }}
  >

      Background Image
  </Box>
);