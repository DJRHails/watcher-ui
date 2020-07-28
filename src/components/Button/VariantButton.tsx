import React, { FC, Ref } from 'react';
import { OutlineButton } from './OutlineButton';
import { ButtonProps } from './BaseButton';
import { SolidButton } from './SolidButton';
import { TextButton } from './TextButton';
import { GradientButton } from './GradientButton';

const VARIANTS = {
  solid: (props: ButtonProps) => <SolidButton {...props} />,
  gradient: (props: ButtonProps) => <GradientButton {...props}/>,
  outline: (props: ButtonProps) => <OutlineButton {...props} />,
  text: (props: ButtonProps) => <TextButton {...props} />
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

export const VariantButton: FC<ButtonProps> = React.forwardRef(({ variant, ...props }: ButtonProps, ref: Ref<any>) => {
  const propsWithRef = {...props, ref };
  return (
    variant ? VARIANTS[variant](propsWithRef) : VARIANTS.solid(propsWithRef)
  );
});
