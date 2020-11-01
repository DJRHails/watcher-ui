import React from 'react';
import { TransactionModal, Transaction } from './index';
import moment from 'moment';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody } from '../Modal';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Heading, Text, Box, CloseButton, Link } from '..';

const BLOCK_TIME = moment.duration(500, 'seconds');

interface TransactionStartedProps extends TransactionModal {
  transaction: Transaction;
}

const TransactionStarted: React.FC<TransactionStartedProps> = ({
  isOpen,
  onClose,
  transaction: {
    to,
    from,
    externalLink,
    cost,
    startTime,
    delay = BLOCK_TIME,
  },
}: TransactionStartedProps) => {
  const [finishTime, setFinishTime] = React.useState(moment().add(delay));
  const [ticks, setTicks] = React.useState(0);

  React.useEffect(() => {
    setFinishTime(moment(startTime).add(delay));
  }, [startTime, delay]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTicks((ticks: number) => ticks + 1);
    }, 200);
    if (!isOpen) clearInterval(interval);
    return () => clearInterval(interval);
  }, [ticks, isOpen]);

  const progress = Math.min(90, 100 * ticks / (finishTime.diff(startTime, 'seconds')));

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <Flex
              justify="space-between"
            >
              <span></span>
              <Heading.h4 mb={0}>Transfer in progress</Heading.h4>
              <CloseButton onClick={onClose}/>
            </Flex>
          </ModalHeader>
          <ModalBody px={5}>
            <Text>
          Perfect! {to} should have it shortly.
            </Text>
            <Box pt={4} pb={5}>
              <Box bg="accent" py={2} sx={{ width: `${progress}%` }} />
              <Flex
                bg="brand"
                color="white"
                px={3}
                py={4}
                justify="space-between"
              >
                <span>{Number(progress).toFixed()}%</span>
                <Heading.h5>Transfering...</Heading.h5>
                <Link
                  variant="text"
                  color="white"
                  px={3}
                  
                  href={externalLink}
                >
                  <Flex>
                    view tx <Icon
                      name="InsertLink"
                      color="white"
                      pr={2}
                    /> 
                  </Flex>
                </Link>
              </Flex>
              <Flex
                px={3}
                py={2}
                justify="space-between"
              >
                <strong>Your account</strong>
                {from}
              </Flex>
              <Flex
                px={3}
                py={2}
                justify="space-between"
              >
                <strong>Transaction fee</strong>
                <Flex
                  direction="column"
                  align="end"
                >
                  {cost}
                </Flex>
              </Flex>
              <Flex
                px={3}
                py={2}
                justify="space-between"
              >
                <strong>Estimated time</strong>
                <Flex
                  direction="column"
                  align="end"
                >
                  {finishTime.fromNow()}
                </Flex>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default TransactionStarted;
