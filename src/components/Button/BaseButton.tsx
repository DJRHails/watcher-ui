import React from "react";
import { Box } from "../Box";
import { style, layout, space, variant } from "styled-system";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { BoxKnownProps } from "../../types/rebass";

export interface ButtonProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLImageElement>, keyof BoxKnownProps> {
  onClick?: VoidFunction;
  variant?: "solid" | "outline" | "text";
  buttonColor?: string;
  textColor?: string;
}

const buttonColorStyle = style({
  prop: "buttonColor",
  cssProperty: "--button-color",
  key: "colors",
});

const textColorStyle = style({
  prop: "textColor",
  cssProperty: "--text-color",
  key: "colors",
});

const baseButtonStyle = css({
  "&": {
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    textDecoration: "none",
    textAlign: "center",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "md",
  },
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus": {
    outline: "none",
  },
  "&:disabled": {
    opacity: 0.5,
    pointerEvents: "none",
  },
});


export const BaseButton = styled(Box)(
  baseButtonStyle,
  buttonColorStyle,
  textColorStyle,
  space,
  layout,
  variant({
    prop: "buttonSize",
    variants: {
      sm: {
        py: 2,
        px: 3,
      },
      md: {
        py: 3,
        px: 4,
      },
      lg: {
        py: 4,
        px: 5,
      }
    }
  }),
);