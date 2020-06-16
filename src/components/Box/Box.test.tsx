import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { Box } from "./Box";

describe("Box component sanity", () => {
  it("has name", () => {
    expect(Box.displayName).toBe("Box");
  });

  it("matches default snapshot", () => {
    const component = render(<Box>Box!</Box>);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Box bg="brand" color="white">Some Text</Box>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});