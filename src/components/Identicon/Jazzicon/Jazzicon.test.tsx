import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../themes/theme";

import { Jazzicon } from "./Jazzicon";

describe("Jazzicon component sanity", () => {
  it("has name", () => {
    expect(Jazzicon.displayName).toBe("Jazzicon");
  });

  it("matches default snapshot", () => {
    const component = render(<Jazzicon address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE"/>);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Jazzicon address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE" />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});