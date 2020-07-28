import React, { FC, Ref, useEffect, ReactNode } from 'react';
import { BoxProps, Box } from '/components';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { useModalContext } from '../ModalContext';

export interface ModalBodyProps extends BoxProps {
  children?: ReactNode
}

const StyledBody = styled(Box)(
  css({
    px: 6,
    py: 2,
  })
);

export const ModalBody: FC<ModalBodyProps> = React.forwardRef((props: ModalBodyProps, ref: Ref<any>) => {
  const { children, ...rest } = props;
  const { bodyId, setBodyMounted } = useModalContext();

  /**
   * Notify us if this component was rendered or used
   * so we can append `aria-describedby` automatically
   */
  useEffect(() => {
    setBodyMounted(true);
    return () => setBodyMounted(false);
  }, [setBodyMounted]);

  return (
    <StyledBody
      ref={ref}
      id={bodyId}
      {...rest}
    >
      {children}
    </StyledBody>
  );
});
ModalBody.displayName='ModalBody';
