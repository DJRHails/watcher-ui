import React from 'react';

import { TransactionModal, Transaction } from './index';
import { Modal, ModalHeader, Flex, Button, ModalBody, ModalFooter, Icon, Text, CloseButton, Heading } from '..';
import { ModalOverlay, ModalContent } from '../Modal';

interface TransactionFailureProps extends TransactionModal {
  transaction: Transaction;
}

const TransactionFailure: React.FC<TransactionFailureProps> = ({
  isOpen,
  onClose,
  transaction: {
    externalLink,
  },
}: TransactionFailureProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay>
        <ModalContent>
          {/* className="border-top-danger w-100" */}
          
          <ModalHeader>
            <Flex
              justify="space-between"
            >
              <Text color="danger">
                <Icon name="Cancel" />
              </Text>
              <Heading.h4 mb={0}>Transfer failed</Heading.h4>
              <CloseButton onClick={onClose}/>
            </Flex>
          </ModalHeader>
          <ModalBody px={5}>
            We could not confirm your transaction.
            Are you sure you have permissions to transfer this artifact.
          </ModalBody>
          <ModalFooter>
            <Button href={externalLink}>
            View on Etherscan
            </Button>
            <Button onClick={onClose}>Return</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default TransactionFailure;
