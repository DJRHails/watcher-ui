import React from "react";
import { Box, BoxProps } from "../Box";
import { AspectRatio } from "..";
import { borders, BorderProps } from "styled-system";
import styled from "styled-components";

export interface CircleProps extends BoxProps, BorderProps {} 

const StyledCircle = styled(Box)(
  borders,
);

export const Circle: React.FC<CircleProps> = ({
  width,
  size,
  height,
  ...rest
}: CircleProps) => {
  return (
    <Box size={size} height={height} width={width}>
      <AspectRatio ratio={1}>
        <StyledCircle
          width="full"
          borderRadius="full"
          {...rest}
        />
      </AspectRatio>
    </Box>
  );
};
Circle.displayName="Circle";