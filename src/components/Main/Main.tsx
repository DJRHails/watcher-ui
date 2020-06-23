import React, { ReactNode } from "react";
import theme from "/themes/theme";
import { ThemeProvider } from "styled-components";
import { CssReset, Box, BoxProps } from "/components";

export interface MainProps extends BoxProps {
  children?: ReactNode
} 

export const Main: React.FC<MainProps> = ({
  sx = {
    fontFamily: "body",
    height: "full"
  },
  ...rest
}: MainProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssReset/>
      <Box role="main" sx={sx} {...rest}/>
    </ThemeProvider>
  );
};
