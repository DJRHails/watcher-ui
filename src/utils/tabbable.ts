// Really great work done by Diego Haz on this one
// https://github.com/reakit/reakit/blob/master/packages/reakit-utils/src/tabbable.ts

export const hasDisplayNone = (element: Element) =>
  window.getComputedStyle(element).display === 'none';

export const hasTabIndex = (element: Element) =>
  element.hasAttribute('tabindex');

export const hasNegativeTabIndex = (element: HTMLElement) =>
  hasTabIndex(element) && element.tabIndex === -1;

export function isDisabled(element: HTMLElement) {
  return (
    Boolean(element.getAttribute('disabled')) == true ||
    Boolean(element.getAttribute('aria-disabled')) == true
  );
}

export function hasFocusWithin(element: Element) {
  if (!document.activeElement) return false;
  return element.contains(document.activeElement);
}

export function isHTMLElement(element: Element): element is HTMLElement {
  return element instanceof HTMLElement;
}

export function isHidden(element: HTMLElement) {
  if (element.parentElement && isHidden(element.parentElement)) return true;
  return element.hidden;
}

export function isContentEditable(element: HTMLElement) {
  const value = element.getAttribute('contenteditable');
  return value !== 'false' && value != null;
}

export function isFocusable(element: Element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }

  const { localName } = element;
  const focusableTags = ['input', 'select', 'textarea', 'button'];
  if (focusableTags.indexOf(localName) >= 0) return true;

  const others = {
    a: () => element.hasAttribute('href'),
    audio: () => element.hasAttribute('controls'),
    video: () => element.hasAttribute('controls'),
  };

  if (localName in others) {
    return others[localName as keyof typeof others]();
  }

  if (isContentEditable(element)) return true;

  return hasTabIndex(element);
}

export function isTabbable(element: Element) {
  return (
    isHTMLElement(element) &&
    isFocusable(element) &&
    !hasNegativeTabIndex(element)
  );
}

const isActiveElement = (element: Element) => document.activeElement === element;

function isInputElement(element: HTMLElement): element is HTMLInputElement {
  return (
    isHTMLElement(element) &&
    element.tagName.toLowerCase() === 'input' &&
    'select' in element
  );
}

interface FocusProps extends FocusOptions {
  isActive?: typeof isActiveElement
}

export function focus(element: HTMLElement, options: FocusProps = {}) {
  const { isActive = isActiveElement, preventScroll } = options;

  if (isActive(element)) return -1;

  return requestAnimationFrame(() => {
    element.focus({ preventScroll });

    if (isInputElement(element)) {
      element.select();
    }
  });
}

/**
 * Get the next index based on the current index and step.
 *
 * @param currentIndex the current index
 * @param length the total length or count of items
 * @param step the number of steps
 * @param loop whether to circle back once `currentIndex` is at the start/end
 */
export function getNextIndex(
  currentIndex: number,
  length: number,
  step = 1,
  loop = true,
) {
  const lastIndex = length - 1;

  if (currentIndex === -1) {
    return step > 0 ? 0 : lastIndex;
  }

  const nextIndex = currentIndex + step;

  if (nextIndex < 0) {
    return loop ? lastIndex : 0;
  }

  if (nextIndex >= length) {
    if (loop) return 0;
    return currentIndex > length ? length : currentIndex;
  }

  return nextIndex;
}

/**
 * Get's the previous index based on the current index.
 * Mostly used for keyboard navigation.
 *
 * @param index - the current index
 * @param count - the length or total count of items in the array
 * @param loop - whether we should circle back to the
 * first/last once `currentIndex` is at the start/end
 */
export function getPrevIndex(currentIndex: number, count: number, loop = true) {
  return getNextIndex(currentIndex, count, -1, loop);
}

/**
 * Gets the next item based on a search string
 *
 * @param items array of items
 * @param searchString the search string
 * @param itemToString resolves an item to string
 * @param currentItem the current selected item
 */
export function getNextItemFromSearch<T>(
  items: T[],
  searchString: string,
  itemToString: (item: T) => string,
  currentItem: T,
) {
  if (searchString == null) {
    return currentItem;
  }

  // If current item doesn't exist, find the item that matches the search string
  if (!currentItem) {
    const foundItem = items.find((item) =>
      itemToString(item).toLowerCase().startsWith(searchString.toLowerCase()),
    );
    return foundItem;
  }

  // Filter items for ones that match the search string (case insensitive)
  const matchingItems = items.filter((item) =>
    itemToString(item).toLowerCase().startsWith(searchString.toLowerCase()),
  );

  // If there's a match, let's get the next item to select
  if (matchingItems.length > 0) {
    let nextIndex: number;

    // If the currentItem is in the available items, we move to the next available option
    if (matchingItems.includes(currentItem)) {
      const currentIndex = matchingItems.indexOf(currentItem);
      nextIndex = currentIndex + 1;
      if (nextIndex === matchingItems.length) {
        nextIndex = 0;
      }
      return matchingItems[nextIndex];
    } else {
      // Else, we pick the first item in the available items
      nextIndex = items.indexOf(matchingItems[0]);
      return items[nextIndex];
    }
  }

  // a decent fallback to the currentItem
  return currentItem;
}
