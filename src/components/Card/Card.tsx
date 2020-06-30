import React, { FC } from "react";
import { box, BoxProps } from "../Box";
import styled from "styled-components";
import { boxShadow,  BoxShadowProps, BordersProps, variant } from "styled-system";

export interface CardProps
  extends BoxProps, BoxShadowProps, BordersProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxProps> {
    variant?: "outline" | "default"
  }

const CardBox = styled.div<CardProps>(
  variant({
    variants: {
      outline: {
        "--outline-color": "rgb(226, 232, 240)",
        boxShadow: "outline",
      },
      default: {
        boxShadow: "md",
      }
    }
  }),
  box,
  boxShadow,
);

export const Card: FC<CardProps> = ({
  children,
  variant = "default",
  overflow = "hidden",
  ...props
}: CardProps) => (
  <CardBox
    p={3}
    borderRadius="md"
    bg="background"
    variant={variant}
    overflow={overflow}
    {...props}
  >
    {children}
  </CardBox>
);
Card.displayName="Card";
