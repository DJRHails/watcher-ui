import styled from 'styled-components';
import React, { ReactElement, forwardRef, ReactNode } from 'react';
import { mergeRefs } from '/utils';
import { SpaceProps } from 'styled-system';
import { css } from '@styled-system/css';
import { UseDropdownItemProps, useDropdownItem } from './useDropdownItem';

const StyledDropdownItem = styled('button')(
  css({
    textDecoration: 'none',
    color: 'inherit',
    userSelect: 'none',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    textAlign: 'left',
    flex: '0 0 auto',
    outline: 0,
    px: 2,
    py: 3,
    '&:hover, &:focus': {
      bg: 'hover'
    }
  })
);

interface DropdownItemOptions extends Omit<UseDropdownItemProps, 'context'> {
  /**
   * The icon to render before the menu item's label.
   */
  icon?: ReactElement
  /**
   * The spacing between the icon and menu item's label
   */
  iconSpacing?: SpaceProps['mr']
  /**
   * Right-aligned label text content, useful for displaying hotkeys.
   */
  command?: string

  children?: ReactNode
}
export interface DropdownItemProps extends DropdownItemOptions {
  children?: ReactNode
}

export const DropdownItem = forwardRef((
  props: DropdownItemProps,
  ref,
) => {
  const {
    children,
    ...otherProps
  } = props;

  const ownProps = useDropdownItem(otherProps);
  const ownRef = mergeRefs(ownProps.ref, ref);

  return (
    <StyledDropdownItem {...ownProps} ref={ownRef}>
      {children}
    </StyledDropdownItem>
  );
});

DropdownItem.displayName = 'DropdownItem';