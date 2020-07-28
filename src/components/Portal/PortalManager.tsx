import React, { FC, useLayoutEffect } from 'react';
import { createContext } from '/utils';

interface PortalManagerContext {
  node: HTMLElement
  zIndex?: number
}

const [PortalManagerContextProvider, usePortalManager] = createContext<
  PortalManagerContext
>({
  strict: false,
  name: 'PortalManagerContext',
});

export { usePortalManager };

export interface PortalManagerProps {
  /**
   * Child elements of portal manager, ideally should be top level
   */
  children?: React.ReactNode
  /**
   * If z-index clashes may need to apply to prevent "z-index war"
   */
  zIndex?: number
}

/**
 * React hook for force a component to re-render
 */
function useForceUpdate() {
  const [count, setCount] = React.useState(0);
  const forceUpdate = React.useCallback(() => setCount(count + 1), [count]);
  return forceUpdate;
}

/**
 * PortalManager
 * 
 * Used to manage multiple portals within an application
 * Must render once at root.
 * 
 * Inspired by Chakra UI's PortalManager / BaseWeb's LayerManager component
 */
export const PortalManager: FC<PortalManagerProps> = (props: PortalManagerProps) => {
  const { children, zIndex } = props;

  // Wraps stacked layers
  const ref = React.useRef<HTMLDivElement>(null);

  // Force update on mount
  const forceUpdate = useForceUpdate();

  /**
   * force an update on mount so the Provider works correctly
   */
  useLayoutEffect(() => {
    forceUpdate();
  }, []);

  // Detect multiple instances
  const parentManager = usePortalManager();

  const context = {
    node: parentManager?.node || ref.current,
    zIndex
  };

  return (
    <PortalManagerContextProvider value={context}>
      {children}
      <div className="watcher-portal-manager" ref={ref} />
    </PortalManagerContextProvider>
  );
};
PortalManager.displayName='PortalManager';
