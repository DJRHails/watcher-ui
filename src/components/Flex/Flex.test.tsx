import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "/themes/theme";

import { Flex } from "./Flex";

describe("Flex component sanity", () => {
  it("has name", () => {
    expect(Flex.displayName).toBe("Flex");
  });

  it("matches default snapshot", () => {
    const component = render(<Flex />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Flex />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});