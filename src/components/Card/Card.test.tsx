import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "/themes/theme";

import { Card } from "./Card";

describe("Card component sanity", () => {
  it("has name", () => {
    expect(Card.displayName).toBe("Card");
  });

  it("matches default snapshot", () => {
    const component = render(<Card>#tag</Card>);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Card>Some Text</Card>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});