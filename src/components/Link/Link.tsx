import React, { FC } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box, BoxProps } from '../Box';

const StyledLink = styled(Box)(
  css({
    '&': {
      background: 'none',
      border: 'none',
      boxShadow: 'none'
    },
    '&:hover': {
      textDecoration: 'underline',
      background: 'none'
    },
    '&:active': {
      textDecoration: 'none',
    },
    '&::before': {
      display: 'none',
    },
  })
);

export interface LinkProps
  extends BoxProps,
    Omit<React.HTMLProps<HTMLAnchorElement>, keyof BoxProps> {}
    
export const Link: FC<LinkProps> = (props: LinkProps) => (
  <StyledLink as="a" color="brand" {...props} />
);
Link.displayName='Link';
