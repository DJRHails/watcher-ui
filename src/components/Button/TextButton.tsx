import React, { FC } from 'react';
import { ButtonProps, BaseButton } from './BaseButton';
import styled from 'styled-components';
import css from '@styled-system/css';

const StyledTextButton = styled(BaseButton)(
  css({
    '&': {
      color: 'var(--button-color)',
      background: 'none',
      border: 'none',
      boxShadow: 'none'
    },
    '&:hover': {
      textDecoration: 'underline',
      background: 'none'
    },
    '&:active': {
      textDecoration: 'none',
    },
    '&::before': {
      display: 'none',
    },
  })
);

export const TextButton: FC<ButtonProps> = React.forwardRef(({
  buttonColor = 'brand',
  textColor: _,
  ...props
}: ButtonProps, ref: React.Ref<any>) => (
  <StyledTextButton ref={ref} buttonColor={buttonColor} {...props} />
));
