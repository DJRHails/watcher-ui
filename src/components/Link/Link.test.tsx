import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { Link } from "./Link";

describe("Link component sanity", () => {
  it("has name", () => {
    expect(Link.displayName).toBe("Link");
  });

  it("matches default snapshot", () => {
    const component = render(<Link />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Link />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});