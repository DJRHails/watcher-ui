import React, { FC } from 'react';
import { UseDropdownProps, DropdownProvider, useDropdown } from './useDropdown';
import { ReactNodeOrRenderProp } from '/types/utils';
import { runIfFn } from '/utils/function';

export interface DropdownProps extends UseDropdownProps {
  children: ReactNodeOrRenderProp<{ isOpen: boolean; onClose(): void }>
} 

/**
 * Dropdown provides context, state and focus management.
 * Doesn't render DOM node.
 */
export const Dropdown: FC<DropdownProps> = (props: DropdownProps) => {
  const context = useDropdown(props);

  return (
    <DropdownProvider value={context}>
      {runIfFn(props.children, {
        isOpen: context.isOpen,
        onClose: context.onClose
      })}
    </DropdownProvider>
  );
};
Dropdown.displayName = 'Dropdown';