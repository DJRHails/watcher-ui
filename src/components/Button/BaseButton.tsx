import React from "react";
import { Box, BoxProps } from "../Box"; // TODO: Can't use .. here for some reasson again!
import { style, layout, space, variant } from "styled-system";
import styled from "styled-components";
import { css } from "@styled-system/css";
import type { ButtonVariant } from "./VariantButton";
import type { GradientProps } from "./GradientButton";

export interface ButtonProps extends BoxProps, GradientProps, Omit<React.HTMLProps<HTMLButtonElement>, keyof BoxProps> {
  variant?: ButtonVariant;
  buttonColor?: string;
  textColor?: string;
  buttonSize?: "md" | "sm" | "lg";
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


export const BaseButton = styled(Box)<ButtonProps>(
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