import React, { FC, ReactNode } from 'react';
import css from '@styled-system/css';
import styled from 'styled-components';
import { FlexProps } from '/components/Flex';

export interface ModalFooterProps {
  justify?: FlexProps['justify']
  children?: ReactNode
} 

const StyledFooter = styled('footer')<ModalFooterProps>(
  ({justify}) => css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: justify ?? 'flex-end',
    flex: 0,
    py: 4,
    px: 6
  })
);

export const ModalFooter: FC<ModalFooterProps> = (props: ModalFooterProps) => {
  return (
    <StyledFooter {...props}/>
  );
};
ModalFooter.displayName='ModalFooter';
