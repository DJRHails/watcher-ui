import React, { FC, Ref } from 'react';
import { ButtonProps } from './BaseButton';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { StyledSolidButton } from './SolidButton';
import { style } from 'styled-system';

const startColor = style({
  prop: 'startColor',
  cssProperty: '--start-color',
  key: 'colors',
});

const endColor = style({
  prop: 'endColor',
  cssProperty: '--end-color',
  key: 'colors',
});


const StyledGradientButton = styled(StyledSolidButton)(
  startColor,
  endColor,
  css({
    '&:before': {
      background: 'linear-gradient(63.75deg,var(--start-color),var(--end-color))',
    }
  }),
);

export interface GradientProps {
  startColor?: string;
  endColor?: string;
}

export const GradientButton: FC<ButtonProps> = React.forwardRef(({
  startColor = 'brand',
  endColor = 'accent',
  textColor = 'background',
  size = 'md',
  ...props
}: ButtonProps, ref: Ref<any>) => (
  <StyledGradientButton
    startColor={startColor}
    endColor={endColor}
    textColor={textColor}
    buttonSize={size}
    ref={ref}
    {...props}
  />
)
);
