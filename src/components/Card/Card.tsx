import React, { FC } from "react";
import { Box, BoxProps } from "../Box";
import { CardVariants } from "../../themes/theme";
import styled from "styled-components";
import { boxShadow, border, BoxShadowProps, BordersProps } from "styled-system";

export interface CardProps
  extends BoxProps, BoxShadowProps, BordersProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxProps> {
    variant?: CardVariants
  }

const CardBox = styled(Box)(boxShadow, border);

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
Card.displayName="Card";
