import React from "react";
import { css } from "@styled-system/css";
import { Box, BoxProps } from "../Box";
import styled from "styled-components";
import { layout, typography, space, borders, shadow, BorderProps, TypographyProps, LayoutProps, ShadowProps } from "styled-system";

export interface TableKnownProps extends BoxProps, BorderProps, TypographyProps, LayoutProps, ShadowProps {}

export interface TableProps 
  extends TableKnownProps,
  Omit<React.HTMLProps<HTMLTableElement>, keyof TableKnownProps> {}

// https://github.com/styled-system/styled-system/issues/464
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledTable = styled(Box)<any>(
  layout,
  space,
  typography,
  borders,
  shadow,
  css({
    "&": {
      borderCollapse: "collapse",
      fontFamily: "body",
      color: "text",
      fontSize: 1,
    },
    "th, td": {
      border: "solid",
      borderWidth: "1px 0",
      borderColor: "muted",
      textAlign: "left",
      px: 3,
      fontWeight: "light",
    },
    "tbody tr": {
      height: "12"
    },
    "thead tr, tfoot tr": {
      height: "16",
    },
    "thead th": {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  })
);

export const Table: React.FC<TableProps> = (props: TableProps) => (
  <StyledTable
    width="full"
    m={2}
    border={1}
    borderColor="muted"
    borderStyle="solid"
    fontSize={2}
    fontWeight="medium"
    fontFamily="body"
    boxShadow="sm"  
    {...props}
    as="table"
  />
);
Table.displayName = "Table";
