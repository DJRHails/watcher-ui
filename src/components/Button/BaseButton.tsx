import React from "react";
import { Box } from "../Box";
import css from "@styled-system/css";
import { style, layout, space } from "styled-system";
import styled from "styled-components";
import { BoxKnownProps } from "../../types/rebass";

export interface ButtonProps extends BoxKnownProps, Omit<React.HTMLProps<HTMLImageElement>, keyof BoxKnownProps> {
  onClick?: VoidFunction;
  variant?: "solid" | "outline";
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
    py: 3,
    px: 4,
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
  buttonColorStyle,
  textColorStyle,
  layout,
  space,
  baseButtonStyle,
);