import { HTMLAttributes, useCallback } from 'react';
import { useDropdownContext } from './useDropdown';
import { mergeRefs, callAllHandlers, focus } from '/utils';
import { createOnKeyDown } from '/utils/keydown';
import { dataAttr } from '/utils/dom';

export interface UseDropdownButtonProps extends HTMLAttributes<Element> {}

/**
 * React Hook to manage a dropdown button.
 *
 * The assumption here is that the `useDropdown` hook is used
 * in a component higher up the tree, and it's return value
 * is passed as `context` to this hook.
 */
export function useDropdownButton(props: UseDropdownButtonProps) {
  const dropdown = useDropdownContext();

  const {
    setFocusedIndex,
    onOpen,
    isOpen,
    onClose,
    autoSelect,
    dropdownRef,
    domContext: { descendants },
  } = dropdown;

  const openAndFocusDropdown = useCallback(() => {
    onOpen();
    if (dropdownRef.current) {
      focus(dropdownRef.current);
    }
  }, [onOpen, dropdownRef]);

  const openAndFocusFirstItem = useCallback(() => {
    onOpen();
    setFocusedIndex(0);
  }, [onOpen, setFocusedIndex]);

  const openAndFocusLastItem = useCallback(() => {
    onOpen();
    const lastIndex = descendants.length - 1;
    setFocusedIndex(lastIndex);
  }, [onOpen, setFocusedIndex, descendants]);

  const onClick = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      const action = autoSelect ? openAndFocusFirstItem : openAndFocusDropdown;
      action();
    }
  }, [autoSelect, isOpen, onClose, openAndFocusFirstItem, openAndFocusDropdown]);

  const onKeyDown = createOnKeyDown({
    keyMap: {
      Enter: openAndFocusFirstItem,
      ArrowDown: openAndFocusFirstItem,
      ArrowUp: openAndFocusLastItem,
    },
  });

  return {
    ...props,
    ref: mergeRefs(dropdown.buttonRef, dropdown.reference.ref),
    id: dropdown.buttonId,
    'data-active': dataAttr(dropdown.isOpen),
    'aria-expanded': dropdown.isOpen,
    'aria-haspopup': 'dropdown' as React.AriaAttributes['aria-haspopup'],
    'aria-controls': dropdown.dropdownId,
    onClick: callAllHandlers(props.onClick, onClick),
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
  };
}