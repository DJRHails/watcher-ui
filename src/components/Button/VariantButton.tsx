import React, { FC } from "react";
import { OutlineButton } from "./OutlineButton";
import { ButtonProps } from "./BaseButton";
import { SolidButton } from "./SolidButton";
import { TextButton } from "./TextButton";

const VARIANTS = {
  solid: (props: ButtonProps) => <SolidButton {...props} />,
  outline: (props: ButtonProps) => <OutlineButton {...props} />,
  text: (props: ButtonProps) => <TextButton {...props} />
};

export const VariantButton: FC<ButtonProps> = ({ variant, ...props }: ButtonProps) => (
  variant ? VARIANTS[variant](props) : VARIANTS.solid(props)
);
