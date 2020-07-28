import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { Container } from './Container';

const story: KindMeta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
};

export const standard: StoryMeta = () => (
  <Container>Container</Container>
);

export default story;