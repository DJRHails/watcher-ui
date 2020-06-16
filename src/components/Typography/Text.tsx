import React from "react";
import { Box } from "../Box";
import { TypographyVariants } from "../../themes/theme";

import StyledSystem from "styled-system";
import { BoxKnownProps } from "../../types/rebass";

export interface TextKnownProps
  extends BoxKnownProps,
    StyledSystem.FontFamilyProps,
    StyledSystem.FontWeightProps,
    StyledSystem.FontStyleProps,
    StyledSystem.TextAlignProps,
    StyledSystem.LineHeightProps,
    StyledSystem.LetterSpacingProps {}

export interface TextProps
  extends TextKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof TextKnownProps> {
  variant?: TypographyVariants;
  textTransform?: "uppercase"
}

export const Text: React.FC<TextProps> = ({ textTransform, ...props }: TextProps) => {
  return (
    // For some reason as const fails to prevent type widening here
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Box tx={"typography" as any} variant="body" {...props} css={textTransform && {
      "text-transform": textTransform,
    }} />
  );
};
Text.displayName="Text";
