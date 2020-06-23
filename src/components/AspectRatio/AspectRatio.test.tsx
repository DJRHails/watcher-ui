import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { AspectRatio } from "./AspectRatio";
import { Box } from "..";

describe("Aspect Ratio component sanity", () => {
  it("has name", () => {
    expect(AspectRatio.displayName).toBe("AspectRatio");
  });

  it("matches default snapshot", () => {
    const component = render(<AspectRatio><Box backgroundColor="red"/></AspectRatio>);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <AspectRatio><Box backgroundColor="brand"/></AspectRatio>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it("matches a square snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <AspectRatio ratio={1}><Box backgroundColor="brand"/></AspectRatio>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});