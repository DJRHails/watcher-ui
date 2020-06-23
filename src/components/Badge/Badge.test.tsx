import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "/themes/theme";

import { Badge } from "./Badge";

describe("Badge component sanity", () => {
  it("has name", () => {
    expect(Badge.displayName).toBe("Badge");
  });

  it("matches default snapshot", () => {
    const component = render(<Badge>#tag</Badge>);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Badge>Some Text</Badge>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});