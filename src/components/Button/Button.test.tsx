import React from "react";
import { Button } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

describe("Button component sanity", () => {
  it("has name", () => {
    expect(Button.displayName).toBe("Button");
  });

  it("matches default snapshot", () => {
    const component = render(<Button />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Button.Outline component sanity", () => {
  it("matches default snapshot", () => {
    const component = render(<Button variant="outline" />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button variant="outline" />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Button.Text component sanity", () => {
  it("matches default snapshot", () => {
    const component = render(<Button variant="text" />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Button variant="text" />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Link Button Outline component sanity", () => {
  it("matches default snapshot", () => {
    const component = render(
      <Button
        variant="outline"
        as={"a"}
        href={"#!"}
        target={"_blank"}
        title={"Learn more"}
      >
        Learn More
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});