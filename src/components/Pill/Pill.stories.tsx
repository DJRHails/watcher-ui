import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Pill } from '../Pill';
import { StoryMeta } from '/types/storybook';

export default {
  title: 'Components/Pill',
  component: Pill,
  decorators: [withKnobs],
};

export const Brand: StoryMeta = () => (
  <Pill color="brand">{text('Pill Text', 'Brand')}</Pill>
);
export const Success: StoryMeta = () => (
  <Pill color="success">{text('Pill Text', 'Success')}</Pill>
);
export const Muted: StoryMeta = () => (
  <Pill>{text('Pill Text', 'Muted')}</Pill>
);