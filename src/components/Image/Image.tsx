import React, { FC } from 'react';
import { Box, BoxProps } from '../Box';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

export interface ImageProps
  extends BoxProps,
    Omit<React.HTMLProps<HTMLImageElement>, keyof BoxProps> {}

const StyledImage = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto'
  },
  space,
  layout,
);

export const Image: FC<ImageProps> = (props: ImageProps) => (
  <StyledImage
    as="img"
    {...props}
  />
);
Image.displayName = 'Image';
