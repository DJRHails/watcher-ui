import React from 'react';

import { TransactionModal } from './index';
import MetamaskIcon from './MetamaskIcon';
import { Modal, Flex, Text, Button, Box, ModalHeader, ModalBody, ModalFooter, Heading, CloseButton, Spinner } from '..';
import { ModalOverlay, ModalContent } from '../Modal';

const TransactionStarted: React.FC<TransactionModal> = ({
  isOpen,
  onClose,
}: TransactionModal) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <Flex
              justify="space-between"
            >
              <MetamaskIcon/>
              <Heading.h4 pl={3} mb={0}>Confirm your transaction in [wallet]</Heading.h4>
              <CloseButton onClick={onClose}/>
            </Flex>
          </ModalHeader>
          <ModalBody px={5}>
            <Text>
          Double check the details here - your transfer cannot be undone.
            </Text>
            <Box pt={6} pb={7}>
              <Flex
                px={3}
                pb={4}
                justify="space-between"
              >
                <Spinner fontSize="0.5rem"/>
                <Flex
                  direction="column"
                  align="end"
                >
                  <Text>Waiting for confirmation...</Text>
                  <Text color="muted">Don&apos;t see the MetaMask popup?</Text>
                </Flex>
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="solid"
              color="muted"
              onClick={onClose}
            >Cancel transaction</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default TransactionStarted;
