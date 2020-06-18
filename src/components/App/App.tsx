import React, { PropsWithChildren } from "react";
import { SxStyleProp } from "../../types/rebass";
import theme from "../../themes/theme";
import { ThemeProvider } from "styled-components";
import { CssReset, Box } from "..";

export interface AppProps {
  sx?: SxStyleProp;
} 

export const App: React.FC<AppProps> = ({
  sx = {fontFamily: "body"},
  children
}: PropsWithChildren<AppProps>) => {
  return (
    <ThemeProvider theme={theme}>
      <CssReset/>
      <Box role="main" sx={sx}>
        {children}
      </Box>
    </ThemeProvider>
  );
};
App.displayName="App";