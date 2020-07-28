import React, { FC, ReactNode } from 'react';
import { PortalProps, Portal } from '../Portal';
import { useModal, UseModalProps } from './useModal';
import { ModalContextProvider } from './ModalContext';

export interface ModalProps extends UseModalProps {
  children?: ReactNode
  scrollBehaviour?: 'inside' | 'outside'
  getContainer?: PortalProps['getContainer']
} 

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const {
    getContainer,
    children
  } = props;
  
  const modal = useModal(props);

  if (!modal.isOpen) return null;

  return (
    <ModalContextProvider value={modal}>
      <Portal getContainer={getContainer}>
        {children}
      </Portal>
    </ModalContextProvider>
  );
};

Modal.defaultProps = {
  scrollBehaviour: 'outside',
};

Modal.displayName='Modal';
