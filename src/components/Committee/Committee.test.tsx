import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "/themes/theme";

import { Committee } from "./Committee";

describe("Committee component sanity", () => {
  it("has name", () => {
    expect(Committee.displayName).toBe("Committee");
  });

  it("matches default snapshot", () => {
    const component = render(<Committee members={[]}/>);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Committee members={[]}/>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});