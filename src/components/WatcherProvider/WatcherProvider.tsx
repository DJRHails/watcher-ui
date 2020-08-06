import React, { ReactNode } from 'react';
import defaultTheme from '/themes/theme';
import { ThemeProvider } from 'styled-components';
import { CssReset, Box, BoxProps } from '/components';
import { PortalManager } from '../Portal';
import { Theme } from 'styled-system';

export interface WatcherProviderProps extends BoxProps {
  theme?: Theme
  children?: ReactNode
} 

export const WatcherProvider: React.FC<WatcherProviderProps> = ({
  sx = {
    fontFamily: 'body',
    height: 'full'
  },
  theme,
  ...rest
}: WatcherProviderProps) => {
  return (
    <ThemeProvider theme={{...defaultTheme, ...theme}}>
      <CssReset/>
      <PortalManager>
        <Box role="main" sx={sx} {...rest}/>
      </PortalManager>
    </ThemeProvider>
  );
};
WatcherProvider.displayName = 'WatcherProvider';