import React, { FC } from "react";
import { Box, BoxProps } from "../Box";
import styled from "styled-components";
import { boxShadow, border, background, compose, BoxShadowProps, BordersProps, variant, padding } from "styled-system";

export interface CardProps
  extends BoxProps, BoxShadowProps, BordersProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxProps> {
    variant?: "outline" | "default"
  }

const CardBox = styled(Box)<CardProps>(
  variant({
    variants: {
      outline: {
        "--outline-color": "rgb(226, 232, 240)",
        boxShadow: "outline",
      },
      default: {
        boxShadow: "md",
        overflow: "hidden",
      }
    }
  }),
  compose(
    background,
    padding,
    boxShadow,
    border,
  ),
);

export const Card: FC<CardProps> = ({
  children,
  variant = "default",
  ...props
}: CardProps) => (
  <CardBox
    p={3}
    borderRadius="md"
    bg="background"
    variant={variant}
    {...props}
  >
    {children}
  </CardBox>
);
Card.displayName="Card";
