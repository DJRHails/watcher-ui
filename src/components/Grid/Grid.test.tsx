import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

import { Grid } from "./Grid";

describe("Grid component sanity", () => {
  it("has name", () => {
    expect(Grid.displayName).toBe("Grid");
  });

  it("matches default snapshot", () => {
    const component = render(<Grid />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Grid />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});