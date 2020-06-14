import React from "react"
import { TypographyVariants } from "../../themes/theme"
import { Box } from "../Box"
import { TextKnownProps } from "."

export interface TextProps
  extends TextKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof TextKnownProps> {
  variant?: TypographyVariants;
  textTransform?: "uppercase"
}

export const Text: React.FC<TextProps> = ({ textTransform, ...props }: TextProps) => (
  <Box tx="typography" variant="body" {...props} css={textTransform && {
    "text-transform": textTransform,
  }} />
)
