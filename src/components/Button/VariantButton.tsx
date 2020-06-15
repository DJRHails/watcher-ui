import React, { FC } from "react";
import { OutlineButton } from "./OutlineButton";
import { ButtonProps } from "./BaseButton";
import { SolidButton } from "./SolidButton";

const VARIANTS = {
  solid: (props: ButtonProps) => <SolidButton {...props} />,
  outline: (props: ButtonProps) => <OutlineButton {...props} />,
};

export const VariantButton: FC<ButtonProps> = ({ variant, ...props }: ButtonProps) => (
  variant ? VARIANTS[variant](props) : VARIANTS.solid(props)
);
