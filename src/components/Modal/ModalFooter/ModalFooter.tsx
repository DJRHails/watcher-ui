import React, { FC, ReactNode } from 'react';
import css from '@styled-system/css';
import styled from 'styled-components';

export interface ModalFooterProps {
  children?: ReactNode
} 

const StyledFooter = styled('footer')(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0,
    py: 4,
    px: 6
  })
);

export const ModalFooter: FC<ModalFooterProps> = (props: ModalFooterProps) => {
  const { children, ...rest } = props;
  return (
    <StyledFooter {...rest}>
      {children}
    </StyledFooter>
  );
};
ModalFooter.displayName='ModalFooter';
