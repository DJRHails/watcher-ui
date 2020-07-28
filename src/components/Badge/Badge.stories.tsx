import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Badge } from './Badge';
import { Text } from '/components';
import { StoryMeta } from '/types/storybook';

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const Brand: StoryMeta = () => (
  <Badge>{text('Badge Text', 'Brand')}</Badge>
);
export const Success: StoryMeta = () => (
  <Badge variantColor="success">{text('Badge Text', 'Success')}</Badge>
);

export const Large: StoryMeta = () => (
  <Text fontSize={3} fontWeight="bold">
    Daniel Hails
    <Badge ml={1} variantColor="success">{text('Badge Text', 'New')}</Badge>
  </Text>
);
