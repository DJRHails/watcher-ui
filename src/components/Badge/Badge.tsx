import React, { FC } from "react"
import { Box, BoxProps } from "../Box"

interface BadgeProps extends BoxProps,
Omit<React.HTMLProps<HTMLDivElement>, keyof BoxProps> {
  variantColor?: "success" | "brand"
}

export const Badge: FC<BadgeProps> = ({
  children,
  variantColor = "brand",
  ...props
}: BadgeProps) => (
  <Box 
    variant="badge"
    bg={`badge.${variantColor}`}
    color={variantColor}
    fontSize={1}
    {...props}
  >
    {children}
  </Box>
)
