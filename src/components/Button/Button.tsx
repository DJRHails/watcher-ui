import React, { FC } from 'react'
import { Text } from '/components'
import { VariantButton } from './VariantButton'
import { ButtonProps } from './BaseButton'

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'solid',
  fontSize,
  ...props
}: ButtonProps) => (
  <VariantButton
    as="button"
    variant={variant}
    {...props}
  >
    <Text variant="button" fontSize={fontSize}>{children}</Text>
  </VariantButton>
)
Button.displayName='Button'