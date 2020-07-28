import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { CloseButton } from './CloseButton';

const story: KindMeta<typeof CloseButton> = {
  title: 'Components/CloseButton',
  component: CloseButton,
};

export const standard: StoryMeta = () => (
  <CloseButton>Close Button</CloseButton>
);

export default story;