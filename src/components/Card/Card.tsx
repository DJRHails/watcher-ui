import React, { FC } from "react";
import { Box, BoxProps } from "../Box";
import { CardVariants } from "../../themes/theme";
import styled from "styled-components";
import { boxShadow, BoxShadowProps } from "styled-system";

export interface CardProps
  extends BoxProps, BoxShadowProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxProps> {
    variant?: CardVariants
  }

const CardBox = styled(Box)(boxShadow);

export const Card: FC<CardProps> = ({
  children,
  variant = "default",
  ...props
}: CardProps) => (
  <CardBox
    tx="cards"
    variant={variant}
    {...props}
  >
    {children}
  </CardBox>
);
