import React from 'react';

import { TransactionModal } from './index';
import { Flex } from '../Flex';
import { Modal, ModalHeader, Button, ModalBody, ModalFooter, Text, Heading, CloseButton } from '..';
import { Icon } from '../Icon';
import { ModalOverlay, ModalContent } from '../Modal';

interface TransactionSuccessProps extends TransactionModal {
  children: React.ReactNode
}

const TransactionSuccess: React.FC<TransactionSuccessProps> = ({
  isOpen,
  onClose,
  children,
}: TransactionSuccessProps) => {
  return (
    <Modal
      isOpen={isOpen}
      size="lg"
      onClose={onClose}
    >
      <ModalOverlay>
        <ModalContent
          borderTopColor="success"
          borderTopStyle="solid"
          borderTopWidth="thick"
        >
          <ModalHeader> 
            <Flex
              justify="space-between"
            >
              <Text color="success">
                <Icon name="Check" />
              </Text>
              <Heading.h4 mb={0}>Success</Heading.h4>
              <CloseButton onClick={onClose}/>
            </Flex>
          </ModalHeader>
          <ModalBody px={5}>
            {children}
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" onClick={onClose}>Done</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default TransactionSuccess;
