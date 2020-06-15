import React, { FC } from "react";
import { Box, BoxProps } from "../Box";

export interface ImageProps
  extends BoxProps,
    Omit<React.HTMLProps<HTMLImageElement>, keyof BoxProps> {}

export const Image: FC<ImageProps> = (props: ImageProps) => (
  <Box
    as="img"
    {...props}
    css={{
      maxWidth: "100%",
      height: "auto"
    }}
  />
);
