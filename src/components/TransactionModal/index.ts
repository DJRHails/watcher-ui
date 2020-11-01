import moment from 'moment';

export { default as TransactionConfirmation } from './TransactionConfirmation';
export { default as TransactionStarted } from './TransactionStarted';
export { default as TransactionSuccess } from './TransactionSuccess';
export { default as TransactionFailure } from './TransactionFailure';

export interface TransactionModal {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
}

export interface Transaction {
  to: React.ReactNode;
  from: React.ReactNode;
  externalLink: string;
  cost?: React.ReactNode;
  startTime: moment.Moment;
  delay?: moment.Duration;
}