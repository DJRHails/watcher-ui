import React, { FC } from "react";
import { Box, BoxProps } from "../Box";
import styled from "styled-components";
import css from "@styled-system/css";

export interface BadgeProps extends BoxProps,
Omit<React.HTMLProps<HTMLDivElement>, keyof BoxProps> {
  variantColor?: "success" | "brand"
}

const StyledBadge = styled(Box)(
  css({
    fontFamily: "body",
    textTransform: "uppercase",
    px: 2,
    py: 1,
    fontWeight: "bold",
    borderRadius: "sm",
    whiteSpace: "nowrap",
    display: "inline-block"
  }),
);

export const Badge: FC<BadgeProps> = ({
  variantColor = "brand",
  ...props
}: BadgeProps) => (
  <StyledBadge 
    bg={`badge.${variantColor}`}
    color={variantColor}
    fontSize={1}
    {...props}
  />
);
Badge.displayName = "Badge";
