import React, { ReactNode } from 'react';
import theme from '/themes/theme';
import { ThemeProvider } from 'styled-components';
import { CssReset, Box, BoxProps } from '/components';

export interface WatcherProviderProps extends BoxProps {
  children?: ReactNode
} 

export const WatcherProvider: React.FC<WatcherProviderProps> = ({
  sx = {
    fontFamily: 'body',
    height: 'full'
  },
  ...rest
}: WatcherProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssReset/>
      <Box role="main" sx={sx} {...rest}/>
    </ThemeProvider>
  );
};
WatcherProvider.displayName = 'WatcherProvider';