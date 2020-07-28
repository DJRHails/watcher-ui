import React from 'react';
import styled from 'styled-components';
import { compose, border, layout, LayoutProps, BorderProps } from 'styled-system';

export interface StackDividerProps extends BorderProps, LayoutProps {} 

export const StackDivider: React.FC<StackDividerProps> = styled('hr')<StackDividerProps>(
  {
    alignSelf: 'stretch',
    borderColor: 'inherit',
    width: 'auto',
    height: 'auto'
  },
  compose(
    border,
    layout,
  )
);
StackDivider.displayName='StackDivider';
