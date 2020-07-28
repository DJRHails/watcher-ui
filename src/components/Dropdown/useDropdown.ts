import { UsePopperProps, usePopper } from '../Popper';
import { createContext, useDisclosure, useUpdateEffect, useDescendants, useIds, focus } from '/utils';
import { useRef, useState } from 'react';
import { useInteractOutside } from '@react-aria/interactions';

export interface UseDropdownReturn extends ReturnType<typeof useDropdown> {}

const [DropdownProvider, useDropdownContext] = createContext<UseDropdownReturn>({
  strict: false,
  name: 'DropdownContext',
});

export { DropdownProvider, useDropdownContext };

export interface UseDropdownProps extends UsePopperProps {
  /**
   * Unique id to be used by dropdown and it's children
   */
  id?: string
  /**
   * If `true`, the dropdown will close when a dropdown item is
   * clicked
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * If `true`, the dropdown will close when you click outside
   * the dropdown list
   */
  closeOnBlur?: boolean
  /**
   * If `true`, the first enabled dropdown item will be selected
   * when the dropdown opens.
   *
   * @default true
   */
  autoSelect?: boolean
  /**
   * The Popper.js modifiers to use
   */
  modifiers?: UsePopperProps['modifiers']
  /**
   * Performance 🚀:
   * If `true`, the DropdownItem rendering will be deferred
   * until the dropdown is open.
   */
  isLazy?: boolean
  /**
   * If `true`, the top-level dropdown will be opened in controlled mode
   */
  isOpen?: boolean
  /**
   * If `true`, the top-level dropdown will be opened in un-controlled mode
   */
  defaultIsOpen?: boolean
  /**
   * Function to be called when dropdown is open
   */
  onOpen?: () => void
  /**
   * Function to be called when dropdown is closed
   */
  onClose?: () => void
}

/**
 * React Hook to manage a dropdown
 *
 * It provides the logic and will be used with react context
 * to propagate it's return value to all children
 */
export function useDropdown(props: UseDropdownProps) {
  const {
    id,
    closeOnSelect = true,
    closeOnBlur = true,
    autoSelect = true,
    placement: placementProp = 'bottom-start',
    gutter,
    fixed = true,
    preventOverflow,
    modifiers,
    isLazy,
  } = props;

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure(props);

  /**
   * Prepare the reference to the dropdown and disclosure
   */
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useInteractOutside({
    ref: dropdownRef,
    onInteractOutside: (event: any) => {
      if (
        closeOnBlur &&
        !buttonRef.current?.contains(event.target as HTMLElement)
      ) {
        onClose();
      }
    },
  });

  /**
   * Add some popper.js for dynamic positioning
   */
  const { placement, popper, reference } = usePopper({
    placement: placementProp,
    fixed,
    forceUpdate: isOpen,
    gutter,
    preventOverflow,
    modifiers,
  });

  const [focusedIndex, setFocusedIndex] = useState(-1);

  /**
   * Context to register all dropdown item nodes
   */
  const domContext = useDescendants<HTMLDivElement, any>();

  /**
   * Focus the top-level disclosure when we close the dropdown
   */
  useUpdateEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
      if (buttonRef.current) {
        focus(buttonRef.current);
      }
    }
  }, [isOpen]);

  /**
   * Generate unique ids for dropdown's list and button
   */
  const [buttonId, dropdownId] = useIds(id, 'dropdown-button', 'dropdown-list');

  return {
    domContext,
    popper,
    placement,
    reference,
    buttonId,
    dropdownId,
    orientation: 'vertical',
    isOpen,
    onToggle,
    onOpen,
    onClose,
    dropdownRef,
    buttonRef,
    focusedIndex,
    closeOnSelect,
    closeOnBlur,
    autoSelect,
    setFocusedIndex,
    isLazy,
  };
}