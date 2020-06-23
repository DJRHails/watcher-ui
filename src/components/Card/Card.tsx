import React, { FC } from "react";
import { Box, BoxProps } from "../Box";
import { CardVariants } from "../../themes/theme";
import styled from "styled-components";
import { boxShadow, border, BoxShadowProps, BordersProps, variant, padding } from "styled-system";
import { css } from "@styled-system/css";

export interface CardProps
  extends BoxProps, BoxShadowProps, BordersProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxProps> {
    variant?: CardVariants
  }

const CardBox = styled(Box)(
  css({
    p: 3,
    borderRadius: "md",
    bg: "background",
  }),
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
  padding,
  boxShadow,
  border
);

export const Card: FC<CardProps> = ({
  children,
  variant = "default",
  ...props
}: CardProps) => (
  <CardBox
    variant={variant}
    {...props}
  >
    {children}
  </CardBox>
);
Card.displayName="Card";
