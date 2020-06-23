import React from "react";
import { Box, BoxProps } from "../Box";
import { borders, BorderProps } from "styled-system";
import styled from "styled-components";
import { css } from "@styled-system/css";

export interface CircleProps extends BoxProps, BorderProps {} 

const StyledCircle = styled(Box)<CircleProps>(
  css({
    position: "relative",
    borderRadius: "full",
  }),
  {
    "&:before": {
      content: "''",
      height: 0,
      display: "block",
      paddingBottom: "100%",
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
  }, //TODO: Fix with nested
  borders,
);

export const Circle: React.FC<CircleProps> = ({
  width = "auto",
  height = "auto",
  ...rest
}: CircleProps) => (
  <StyledCircle
    width={width}
    height={height}
    {...rest}
  />
);
Circle.displayName="Circle";