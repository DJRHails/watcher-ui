import React, { FC } from "react"
import { Box, BoxProps } from "../Box"

interface ButtonProps extends BoxProps,
Omit<React.HTMLProps<HTMLImageElement>, keyof BoxProps> {
  onClick?: VoidFunction;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "simple",
  ...props
}: ButtonProps) => (
  <Box tx="buttons" variant={variant} as="button" {...props}>
    {children}
  </Box>
)
