import React from "react";
import { ButtonProps } from "./BaseButton";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { StyledSolidButton } from "./SolidButton";

const StyledOutlineButton = styled(StyledSolidButton)(
  css({
    "&": {
      color: "var(--text-color)",
      backgroundColor: "transparent",
      borderWidth: ".1rem",
      borderStyle: "solid",
      borderColor: "muted",
    },
    "&:hover": {
      borderColor: "var(--button-color)",
      color: "var(--button-color)",
    },
    "&:hover::before": {
      opacity: 0,
    },
    "&:active": {
      backgroundColor: "white",
    },
    "&:active::before": {
      opacity: 0.1,
    },
    "&::before": {
      opacity: 0,
    },
  }),
);

export const OutlineButton: React.FC<ButtonProps> = ({
  buttonColor = "brand",
  textColor,
  ...props
}: ButtonProps) => (
  <StyledOutlineButton buttonColor={buttonColor} textColor={textColor ? textColor : buttonColor} {...props} />
);
