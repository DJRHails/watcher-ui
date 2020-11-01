import React from 'react';
import { KindMeta, StoryMeta } from '/types/storybook';

import { Modal } from './Modal';
import { AnyFunction } from '/types/utils';
import { PortalManager } from '../Portal';
import { useDisclosure } from '/utils';
import { Button } from '../Button';
import { ModalOverlay } from './ModalOverlay';
import { ModalContent } from './ModalContent';
import { ModalCloseButton } from './ModalCloseButton';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

const story: KindMeta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  decorators: [
    (Story: AnyFunction) => (
      <PortalManager>
        <Story/>
      </PortalManager>
    ),
    (Story: AnyFunction) => (
      <ThemeProvider theme={theme}>
        <Story/>
      </ThemeProvider>
    )
  ]
};

export const minimal: StoryMeta = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Button onClick={onOpen}>Open</Button>

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
              <Button>Save</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export const basic: StoryMeta = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Modal Title</ModalHeader>
            <ModalBody>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi.
            </ModalBody>
            <ModalFooter>
              <Button variant='solid' buttonColor="danger" mr={3} onClick={onClose}>Cancel</Button>
              <Button variant='outline'>Save</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default story;