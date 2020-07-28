import { Booleanish } from '/types/utils';

let _window: Window | undefined = undefined;

// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
  _window = window;
} catch (e) {
  /* no-op */
}

/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11.
 */
export const getWindow = (node?: HTMLElement | null) =>
  node?.ownerDocument?.defaultView ?? _window;

/**
 * Check if we can use the DOM. Useful for SSR purposes
 */
function checkIsBrowser() {
  const _window = getWindow();
  return Boolean(
    typeof _window !== 'undefined' &&
      _window.document &&
      _window.document.createElement,
  );
}

export const isBrowser = checkIsBrowser();

export const isRightClick = <E extends MouseEvent | React.MouseEvent>(event: E) => event.button != 0;

export const dataAttr = (condition: boolean | undefined) => (condition ? '' : undefined) as Booleanish;