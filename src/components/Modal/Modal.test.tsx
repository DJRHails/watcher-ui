import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Modal } from './Modal';
import { ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, ModalFooter } from '.';
import { Button } from '/components';
import { useDisclosure } from '/utils';

const MinimalModal = () => { 
  const { isOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Welcome Home</ModalHeader>
          <ModalBody>
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
      ullamco deserunt aute id consequat veniam incididunt duis in sint
      irure nisi.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button>Save</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

describe('Modal component sanity', () => {
  it('has name', () => {
    expect(Modal.displayName).toBe('Modal');
  });

  it('matches default snapshot', () => {
    const component = render(<MinimalModal />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <MinimalModal />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});