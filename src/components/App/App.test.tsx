import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { App } from "./App";

describe("App component sanity", () => {
  it("has name", () => {
    expect(App.displayName).toBe("App");
  });

  it("matches default snapshot", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});