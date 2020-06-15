import React from "react";
import { Table } from ".";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

describe("Table component sanity", () => {
  it("has name", () => {
    expect(Table.displayName).toBe("Table");
  });

  it("matches default snapshot", () => {
    const component = render(<Table />);
    expect(component).toMatchSnapshot();
  });

  it("matches themed snapshot", () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
