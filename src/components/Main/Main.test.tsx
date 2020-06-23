import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { Main } from "./Main";

describe("Main component sanity", () => {
  it("has name", () => {
    expect(Main.displayName).toBe("Main");
  });

  it("matches default snapshot", () => {
    const component = render(<Main />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});