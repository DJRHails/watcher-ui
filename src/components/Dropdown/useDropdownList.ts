import { HTMLAttributes } from 'react';
import { useDropdownContext } from './useDropdown';
import { mergeRefs, callAllHandlers, useShortcut, getNextIndex, getPrevIndex, getNextItemFromSearch } from '/utils';
import { createOnKeyDown } from '/utils/keydown';

export interface UseDropdownListProps extends HTMLAttributes<Element> {}

export function useDropdownList(props: UseDropdownListProps) {
  const dropdown = useDropdownContext();

  const {
    focusedIndex,
    setFocusedIndex,
    dropdownRef,
    isOpen,
    onClose,
    popper,
    dropdownId,
    placement,
    domContext: { descendants },
    isLazy,
  } = dropdown;

  /**
   * Hook that creates a keydown event handler that listens
   * to printable keyboard character press
   */
  const onCharacterPress = useShortcut({
    preventDefault: (event) => event.key !== ' ',
  });

  const onKeyDown = createOnKeyDown({
    onKeyDown: onCharacterPress((character) => {
      /**
       * Typeahead: Based on current character pressed,
       * find the next item to be selected
       */
      const nextItem = getNextItemFromSearch(
        descendants,
        character,
        (node) => node.element?.textContent || '',
        descendants[focusedIndex],
      );

      if (nextItem) {
        const index = descendants.indexOf(nextItem);
        setFocusedIndex(index);
      }
    }),
    keyMap: {
      Escape: onClose,
      ArrowDown: () => {
        const nextIndex = getNextIndex(focusedIndex, descendants.length);
        setFocusedIndex(nextIndex);
      },
      ArrowUp: () => {
        const prevIndex = getPrevIndex(focusedIndex, descendants.length);
        setFocusedIndex(prevIndex);
      },
    },
  });

  return {
    ...props,
    children: isLazy ? (isOpen ? props.children : null) : props.children,
    ref: mergeRefs(dropdownRef, popper.ref),
    tabIndex: -1,
    role: 'dropdown',
    id: dropdownId,
    hidden: !isOpen,
    'aria-orientation': 'vertical' as React.AriaAttributes['aria-orientation'],
    'data-placement': placement,
    style: { ...props.style, ...popper.style },
    onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
  };
}