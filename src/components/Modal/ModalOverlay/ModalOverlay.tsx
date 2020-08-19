import React, { FC, Ref, ReactNode } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useModalContext } from '../ModalContext';
import styled from 'styled-components';
import { css } from '@styled-system/css';

export interface ModalOverlayProps {
  children?: ReactNode
} 

const StyledOverlay = styled('div')(
  css({
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    background: 'rgba(0, 0, 0, 0.48)',
    overflow: 'auto',
    zIndex: 1000,
  })
);

export const ModalOverlay: FC<ModalOverlayProps> = React.forwardRef((
  props: ModalOverlayProps,
  ref: Ref<any>,
) => {
  const { children, ...otherProps } = props;

  const {
    getOverlayProps,
    // autoFocus,
    // trapFocus,
    // dialogRef,
    // initialFocusRef,
    blockScrollOnMount,
    allowPinchZoom,
    // finalFocusRef,
    // returnFocusOnClose,
  } = useModalContext();

  const overlay = getOverlayProps(otherProps, ref);

  return (
    // <FocusLock
    //   autoFocus={autoFocus}
    //   isDisabled={!trapFocus}
    //   initialFocusRef={initialFocusRef}
    //   finalFocusRef={finalFocusRef}
    //   restoreFocus={returnFocusOnClose}
    //   contentRef={dialogRef}
    // >
    <RemoveScroll
      allowPinchZoom={allowPinchZoom}
      enabled={blockScrollOnMount}
    >
      <StyledOverlay
        {...overlay}
      >
        {children}
      </StyledOverlay>
    </RemoveScroll>
    // </FocusLock>
  );
});
ModalOverlay.displayName='ModalOverlay';
