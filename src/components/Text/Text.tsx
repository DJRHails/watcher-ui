import React from "react";
import { BoxProps, Box } from "../Box"; // TODO: This cannot be "/components" for some unknown reason
import styled from "styled-components";
import { TypographyProps, typography, ColorProps, color, variant, SpaceProps, space } from "styled-system";

export type TextVariants = "heading" | "body" | "button";

export interface TextProps extends BoxProps, TypographyProps, ColorProps, SpaceProps {
  uppercase?: true;
  variant?: TextVariants;
} 

const StyledText = styled(Box)<TextProps>(
  ({ uppercase }) => uppercase && "text-transform: uppercase;",
  variant({
    variants: {
      heading: {
        fontFamily: "body",
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