import React, { Ref } from 'react';
import { useModalContext } from '../ModalContext';
import { CloseButton, ButtonProps } from '/components';
import { callAllHandlers } from '/utils';

export interface ModalCloseButtonProps extends ButtonProps {} 

export const ModalCloseButton = React.forwardRef((
  props: ModalCloseButtonProps,
  ref: Ref<any>,
) => {
  const { onClick, ...rest } = props;
  const { onClose } = useModalContext();

  return (
    <CloseButton
      ref={ref}
      onClick={callAllHandlers(onClick, (event: any) => {
        event.stopPropagation();
        onClose();
      })}
      sx={{
        position: 'absolute !important',
        top: '8px',
        right: '12px'
      }}
      {...rest}
    />
  );
});
ModalCloseButton.displayName='ModalCloseButton';
