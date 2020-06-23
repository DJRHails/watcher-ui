import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { Identicon } from "./Identicon";

describe("Identicon component sanity", () => {
  it("has name", () => {
    expect(Identicon.displayName).toBe("Identicon");
  });

  it("matches default snapshot", () => {
    const component = render(<Identicon />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Identicon />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});