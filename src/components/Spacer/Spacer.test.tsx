import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "/themes/theme";

import { Spacer } from "./Spacer";

describe("Spacer component sanity", () => {
  it("has name", () => {
    expect(Spacer.displayName).toBe("Spacer");
  });

  it("matches default snapshot", () => {
    const component = render(<Spacer />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Spacer />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});