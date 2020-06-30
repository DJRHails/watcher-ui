import React, { FC } from "react";
import { Text, TextProps } from "../Text"; //TODO: Cannot be /components
import styled from "styled-components";
import { css } from "@styled-system/css";
import { borders, BordersProps } from "styled-system";

export interface PillProps extends TextProps, BordersProps,
Omit<React.HTMLProps<HTMLDivElement>, keyof TextProps> {}

const StyledPill = styled(Text)(
  borders,
  css({
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    "&::after": {
      content: "''",
      display: "block",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
      width: "100%",
      opacity: 0.12,
      background: "currentColor",
      pointerEvents: "none",
    }
  })
);

export const Pill: FC<PillProps> = ({
  children,
  ...props
}: PillProps) => (
  <StyledPill 
    color="muted"
    bg="white"
    fontSize={1}
    fontWeight="medium"
    height="full"
    px={3}
    py={1}
    borderRadius={3}
    display="inline-flex"
    alignItems="center"
    {...props}
  >
    {children}
  </StyledPill>
);
Pill.displayName = "Pill";
