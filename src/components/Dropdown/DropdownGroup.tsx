import React, { ReactNode } from 'react';
import { Box } from '../Box';
import { css } from '@styled-system/css';
import styled from 'styled-components';

export interface DropdownGroupProps {
  title?: string
  children?: ReactNode
}

const StyledTitle = styled('p')(
  css({
    mx: 4,
    my: 2,
    fontWeight: 'bold',
    fontSize: '0.875rem'
  })
);

export const DropdownGroup = (props: DropdownGroupProps) => {
  const { title, children } = props;

  return (
    <Box role="group">
      {title && (
        <StyledTitle>
          {title}
        </StyledTitle>
      )}
      {children}
    </Box>
  );
};

DropdownGroup.displayName = 'DropdownGroup';
