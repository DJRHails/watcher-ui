import React, { PropsWithChildren } from "react";
import { SxStyleProp } from "../../types/rebass";
import theme from "../../themes/theme";
import { ThemeProvider } from "styled-components";
import { CssReset, Box } from "..";

export interface MainProps {
  sx?: SxStyleProp;
} 

export const Main: React.FC<MainProps> = ({
  sx = {fontFamily: "body"},
  children
}: PropsWithChildren<MainProps>) => {
  return (
    <ThemeProvider theme={theme}>
      <CssReset/>
      <Box role="main" sx={sx}>
        {children}
      </Box>
    </ThemeProvider>
  );
};
Main.displayName="Main";