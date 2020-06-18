import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { Heading } from "./Heading";

describe("Heading.h1 component sanity", () => {
  it("has name", () => {
    expect(Heading.h1.displayName).toBe("Heading.h1");
  });

  it("matches default snapshot", () => {
    const component = render(<Heading.h1 />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Heading.h1 />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});