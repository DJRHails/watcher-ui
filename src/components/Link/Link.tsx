import React, { FC } from "react"
import { Box, BoxProps } from "../Box"

export interface LinkProps
  extends BoxProps,
    Omit<React.HTMLProps<HTMLAnchorElement>, keyof BoxProps> {}

export const Link: FC<LinkProps> = (props: LinkProps) => (
  <Box as="a" variant="link" {...props} />
)
