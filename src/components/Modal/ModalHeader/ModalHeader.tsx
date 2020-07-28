import React, { FC, useEffect, Ref } from 'react';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { useModalContext } from '../ModalContext';

export interface ModalHeaderProps {} 

const StyledHeader = styled('header')(
  css({
    px: '6',
    py: '4',
    fontSize: '1.25em',
    fontWeight: 'bold',
    flex: '0 1 0%',
  })
);

/**
 * ModalHeader
 *
 * React component that houses the title of the modal.
 */
export const ModalHeader: FC<ModalHeaderProps> = React.forwardRef((props: ModalHeaderProps, ref: Ref<any>) => {
  const { headerId, setHeaderMounted } = useModalContext();

  /**
   * Notify us if this component was rendered or used
   * so we can append `aria-labelledby` automatically
   */
  useEffect(() => {
    setHeaderMounted(true);
    return () => setHeaderMounted(false);
  }, [setHeaderMounted]);
  
  return (
    <StyledHeader
      ref={ref}
      id={headerId}
      {...props}
    >
      Modal Header
    </StyledHeader>
  );
});
ModalHeader.displayName='ModalHeader';
