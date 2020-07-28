import { HTMLAttributes, useRef, useCallback } from 'react';
import { useDropdownContext } from './useDropdown';
import { useId } from '/utils/hooks/useIds';
import { useUpdateEffect } from '/utils/hooks/useUpdateEffect';
import { useDescendant } from '/utils/hooks/useDescendant';
import { useClickable } from '/utils/hooks/useClickable';
import { focus } from '/utils';
export interface UseDropdownItemProps extends HTMLAttributes<Element> {
  isDisabled?: boolean
  isFocusable?: boolean
}

export function useDropdownItem(props: UseDropdownItemProps) {
  const {
    onClick: onClickProp,
    isDisabled,
    isFocusable,
    ...htmlProps
  } = props;

  const dropdown = useDropdownContext();

  const {
    domContext,
    setFocusedIndex,
    focusedIndex,
    closeOnSelect,
    onClose,
    dropdownRef,
  } = dropdown;

  const ref = useRef<HTMLDivElement>(null);
  const id = `dropdownitem-${useId()}`;

  /**
   * Register the dropdownitem's node into the domContext
   */
  const index = useDescendant({
    element: ref.current,
    context: domContext,
    disabled: isDisabled,
    focusable: isFocusable,
  });

  const onMouseEnter = useCallback(() => {
    if (isDisabled) return;
    setFocusedIndex(index);
  }, [setFocusedIndex, index, isDisabled]);

  const onMouseMove = useCallback(() => {
    if (document.activeElement !== ref.current) {
      onMouseEnter();
    }
  }, [onMouseEnter]);

  const onMouseLeave = useCallback(() => {
    if (isDisabled) return;
    setFocusedIndex(-1);
  }, [setFocusedIndex, isDisabled]);

  const onClick = useCallback(
    (event: any) => {
      onClickProp?.(event);
      /**
       * Close dropdown and parent dropdown's if `closeOnSelect` is set to `true`
       */
      if (closeOnSelect) {
        onClose();
      }
    },
    [onClose, onClickProp, closeOnSelect],
  );

  const isFocused = index === focusedIndex;

  const trulyDisabled = isDisabled && !isFocusable;

  useUpdateEffect(() => {
    if (isFocused && !trulyDisabled) {
      if (ref.current) {
        focus(ref.current);
      }
    } else {
      if (document.activeElement !== dropdownRef.current) {
        dropdownRef.current?.focus();
      }
    }
  }, [isFocused, trulyDisabled, dropdownRef]);

  const tabbable = useClickable({
    onClick,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
    ref,
    isDisabled,
    isFocusable,
  });

  return {
    ...htmlProps,
    ...tabbable,
    id,
    role: 'dropdownitem',
    tabIndex: isFocused ? 0 : -1,
  };
}
