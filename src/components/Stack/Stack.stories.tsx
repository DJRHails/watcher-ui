import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';
import { Box, StackDivider } from '/components';

import { Stack } from './Stack';

const story: KindMeta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
};

export const vertical: StoryMeta = () => (
  <Stack spacing={4}>
    <span>ooooooo</span>
    <span>ahhhhh</span>
    <span>Woah!</span>
  </Stack>
);

export const inline: StoryMeta = () => (
  <Stack width="full" bg="brand" direction="row" p={3}>
    <Box size="40px" bg="#fff" borderRadius="full" />
    <Box size="40px" bg="#fff" borderRadius="full" />
    <Box size="40px" bg="#fff" borderRadius="full" />
  </Stack>
);

export const responsive: StoryMeta = () => (
  <Stack direction={['column', 'column', 'column', 'row']} spacing="40px" width="full" p={3}>
    <Box size="40px" bg="yellow">
      1
    </Box>
    <Box size="40px" bg="tomato">
      2
    </Box>
    <Box size="40px" bg="pink">
      3
    </Box>
  </Stack>
);

export const WithResponsiveDivider = () => (
  <Stack
    mt={10}
    direction={['column', 'row']}
    divider={<StackDivider borderColor="red" />}
    spacing={4}
  >
    <Box size="40px" bg="yellow">
      1
    </Box>
    <Box size="40px" bg="tomato">
      2
    </Box>
    <Box size="40px" bg="pink">
      3
    </Box>
  </Stack>
);

export const WithDivider = () => (
  <>
    <Stack divider={<StackDivider />} spacing={4}>
      <Box size="40px" bg="yellow">
        1
      </Box>
      <Box size="40px" bg="tomato">
        2
      </Box>
      <Box size="40px" bg="pink">
        3
      </Box>
    </Stack>

    <Stack mt={5} direction="row" divider={<StackDivider />} spacing={4}>
      <Box size="40px" bg="yellow">
        1
      </Box>
      <Box size="40px" bg="tomato">
        2
      </Box>
      <Box size="40px" bg="pink">
        3
      </Box>
    </Stack>
  </>
);

export default story;