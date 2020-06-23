import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "/themes/theme";

import { StackDivider } from "./StackDivider";

describe("Stack Divider component sanity", () => {
  it("has name", () => {
    expect(StackDivider.displayName).toBe("StackDivider");
  });

  it("matches default snapshot", () => {
    const component = render(<StackDivider />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <StackDivider />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});