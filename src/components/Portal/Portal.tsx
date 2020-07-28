import React, { FC, useLayoutEffect } from 'react';
import { createContext } from '/utils';
import ReactDOM from 'react-dom';
import { isBrowser } from '/utils/dom';
import { usePortalManager } from './PortalManager';

type PortalContext = HTMLDivElement | null

const [PortalContextProvider, usePortalContext] = createContext<PortalContext>({
  strict: false,
  name: 'PortalContext',
});

export interface PortalProps {
  /**
   * Function called when the portal mounts
   */
  onMount?(): void
  /**
   * Function called when the portal unmounts
   */
  onUnmount?(): void
  /**
   * Function that will be called to get the parent element
   * that the portal will be attached to.
   */
  getContainer?: () => HTMLElement | null
  /**
   * The content or node you'll like to portal
   */
  children?: React.ReactNode
}
/**
 * Portal
 * 
 * Declarative component to render children into a DOM node outside of hierarchy of parent component.
 */
export const Portal: FC<PortalProps> = (props: PortalProps) => {
  const { onMount, onUnmount, children, getContainer } = props;

  const [portal] = React.useState(() => {
    if (isBrowser) {
      const div = document.createElement('div');
      div.className = 'watcher-portal';
      return div;
    }
    // for ssr
    return null;
  });

  // Check for nested
  const parentPortal = usePortalContext();

  // Check for portal manager
  const manager = usePortalManager();

  const append = React.useCallback(
    (container: HTMLElement | null) => {
      // if user specified a mount node, do nothing.
      if (!portal || !container) return;

      // else, simply append component to the portal node
      container.appendChild(portal);
    },
    [portal],
  );

  useLayoutEffect(() => {
    // get the custom container from the container prop
    const customContainer = getContainer?.();

    /**
     * We need to know where to mount this portal, we have 4 options:
     * - If a mountRef is specified, we'll use that as the container
     * - If portal is nested, use the parent portal node as container.
     * - If it's not nested, use the manager's node as container
     * - else use document.body as containers
     */
    const container =
      customContainer ?? parentPortal ?? manager?.node ?? document.body;

    /**
     * Append portal node to the computed container
     */
    append(container);

    onMount?.();

    return () => {
      onUnmount?.();

      if (!portal) return;

      if (container?.contains(portal)) {
        container?.removeChild(portal);
      }
    };
  }, [
    getContainer,
    portal,
    parentPortal,
    onMount,
    onUnmount,
    manager?.node,
    append,
  ]);

  const _children = manager?.zIndex ? (
    <div
      className="watcher-portal-zIndex"
      style={{
        position: 'absolute',
        zIndex: manager.zIndex,
        width: '100%',
      }}
    >
      {children}
    </div>
  ) : (
    children
  );

  if (!portal) {
    return <>{_children}</>;
  }

  return ReactDOM.createPortal(
    <PortalContextProvider value={portal}>{_children}</PortalContextProvider>,
    portal,
  );
};
Portal.displayName='Portal';
