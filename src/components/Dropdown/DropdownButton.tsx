import React, { forwardRef, Ref, ReactNode } from 'react';
import { mergeRefs } from '/utils';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { Box } from '../Box';
import { useDropdownButton, UseDropdownButtonProps } from './useDropdownButton';

export interface DropdownButtonProps extends UseDropdownButtonProps, Record<string, any>{
  as?: any
  children?: ReactNode
  /**
   * Additional props to pass to as
   */
}

const StyledDropdownButton = styled(Box)(
  css({
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    outline: 0,
    transition: 'all 250ms',
  })
);

/**
 * The trigger for the menu list. Must be a direct child of `Dropdown`.
 */
export const DropdownButton = forwardRef((
  props: DropdownButtonProps,
  ref: Ref<any>,
) => {
  const { children, as: Comp, ...otherProps } = props;

  const ownProps = useDropdownButton(otherProps);
  const ownRef = mergeRefs(ref, ownProps.ref);

  const Wrapper = Comp || StyledDropdownButton;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <Wrapper {...ownProps} ref={ownRef}>
      <Box
        as="span"
        sx={{
          pointerEvents: 'none',
          flex: '1',
        }}
      >
        {children}
      </Box>
    </Wrapper>
  );
});

DropdownButton.displayName = 'DropdownButton';