import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { Icon } from "./Icon";

describe("Icon component sanity", () => {
  it("has name", () => {
    expect(Icon.displayName).toBe("Icon");
  });

  it("matches default snapshot", () => {
    const component = render(<Icon name="Eth" />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Icon name="Eth"/>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});