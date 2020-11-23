import React, { FC, Ref, ReactNode } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { useModalContext } from '../ModalContext';
import { Box, BoxProps } from '/components/Box';

export interface ModalContentProps extends BoxProps {
  children?: ReactNode
} 

const StyledLifter = styled('div')(
  css({
    position: 'fixed',
    left: 0,
    top: 0,
    width: 'full',
    height: 'full',
    zIndex: 1400,
    overflowY: 'auto',
    overflowX: 'hidden'
  })
);

const StyledSection = styled(Box)(
  css({
    my: 12,
    mx: 'auto',
    boxShadow: 'lg',
    maxWidth: 'md',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    borderRadius: 'default',
    backgroundColor: 'background',
    outline: 0,
  })
);

export const ModalContent: FC<ModalContentProps> = React.forwardRef((props: ModalContentProps, ref: Ref<any>) => {
  const { children, ...otherProps } = props;

  const { getContentProps } = useModalContext();

  const content = getContentProps(otherProps, ref);

  return (
    <StyledLifter>
      <StyledSection
        as='section'
        {...content}
      >
        {children}
      </StyledSection>
    </StyledLifter>
  );
});

