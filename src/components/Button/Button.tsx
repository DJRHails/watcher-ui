import React, { FC, Ref } from 'react';
import { Text } from '/components';
import { VariantButton } from './VariantButton';
import { ButtonProps } from './BaseButton';

export const Button: FC<ButtonProps> = React.forwardRef(({
  children,
  variant = 'solid',
  fontSize,
  ...props
}: ButtonProps, ref: Ref<any>) => (
  <VariantButton
    as="button"
    variant={variant}
    ref={ref}
    {...props}
  >
    <Text variant="button" fontSize={fontSize}>{children}</Text>
  </VariantButton>
));
Button.displayName='Button';
