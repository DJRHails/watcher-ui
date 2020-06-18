import React from "react";
import { Box } from "../Box"; // TODO: This cannot be ".." for some unknown reason
import styled from "styled-components";
import { TypographyProps, typography, ColorProps, color, variant, SpaceProps, space } from "styled-system";
import { BaseProps } from "../../types/rebass";

export type TextVariants = "heading" | "body" | "button";

export interface TextProps extends BaseProps, TypographyProps, ColorProps, SpaceProps {
  uppercase?: true;
  variant?: TextVariants;
} 

const StyledText = styled(Box)<TextProps>(
  ({ uppercase }) => uppercase && "text-transform: uppercase;",
  variant({
    variants: {
      heading: {
        fontFamily: "body",
        color: "text",
        fontWeight: "bold",
        lineHeight: "none",
        m: 0,
        mb: 1,
      },
      body: {
        fontFamily: "body",
        fontSize: 1,
      },
      button: {
        position: "relative",
        fontSize: 1,
        fontWeight: "bold",
        zIndex: 1,
        userSelect: "none",
        pointerEvents: "none",
      }
    },
  }),
  typography,
  color,
  space,
);

export const Text: React.FC<TextProps> = ({
  ...rest
}: TextProps) => {
  return (
    <StyledText
      {...rest}
    />
  );
};
Text.displayName="Text";