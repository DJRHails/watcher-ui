import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "/themes/theme";

import { Stack } from "./Stack";

describe("Stack component sanity", () => {
  it("has name", () => {
    expect(Stack.displayName).toBe("Stack");
  });

  it("matches default snapshot", () => {
    const component = render(<Stack />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Stack />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});