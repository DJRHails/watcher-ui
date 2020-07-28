import React, { FC } from 'react';
import { ButtonProps } from '..';
import { BaseButton } from '../BaseButton';
import { css } from '@styled-system/css';
import styled from 'styled-components';

const StyledCloseButton = styled(BaseButton)(
  css({
    bg: 'transparent',
    borderRadius: 'default',
    '&:hover, &:focus': {
      bg: 'hover'
    }
  })
);

const outerSize = (size: ButtonProps['buttonSize']) => {
  return {
    'sm': '1rem',
    'md': '2rem',
    'lg': '4rem'
  }[size ?? 'md'];
};

const innerSize = (size: ButtonProps['buttonSize']) => {
  return {
    'sm': '.375rem',
    'md': '.75rem',
    'lg': '2rem'
  }[size ?? 'md'];
};

export const CloseButton: FC<ButtonProps> = ({
  buttonSize='md',
  ...props
}: ButtonProps) => {
  const outer = outerSize(buttonSize);
  const iconSize = innerSize(buttonSize);
  return (
    <StyledCloseButton size={outer} {...props}>
      <svg viewBox="0 0 24 24" width={iconSize} height={iconSize}>
        <path
          fill="currentColor"
          d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
        />
      </svg>
    </StyledCloseButton>
  );
};
CloseButton.displayName='CloseButton';
