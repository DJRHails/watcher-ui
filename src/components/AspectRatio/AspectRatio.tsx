// Ref: https://chakra-ui.com/aspectratiobox

import React from "react";
import { Box, BoxProps } from "../Box";

export interface AspectRatioProps extends BoxProps {
  ratio?: number
}

/**
 * React component used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 */
export const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio = 4 / 3,
  maxWidth="sm",
  children,
  ...rest
}: AspectRatioProps) => {
  const child = React.Children.only(children);

  return (
    <Box
      maxWidth={maxWidth}
      css={{
        "&": {
          position: "relative",
        },
        "&:before": {
          content: "''",
          height: 0,
          display: "block",
          paddingBottom: `${(1 / ratio) * 100}%`,
        },
        "& > *": {
          overflow: "hidden",
          position: "absolute !important",
          top: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
        "& > img, & > video": {
          objectFit: "cover",
        },
      }}
      {...rest}
    >
      {child}
    </Box>
  );
};
AspectRatio.displayName="AspectRatio";