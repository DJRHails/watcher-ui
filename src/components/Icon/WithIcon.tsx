import React, { FC,  ReactNode } from 'react';
import { Box } from '/components';
import { FontSizeProps } from 'styled-system';

export interface WithIconProps extends FontSizeProps {
  children: ReactNode;
  icon: ReactNode;
  borderWidth?: number;
  scale?: number;
  offset?: {
    top: number;
    right: number;
  };
  maximise?: true;
  allowOverlap?: true;
}

export const WithIcon: FC<WithIconProps> = ({
  children,
  fontSize,
  maximise,
  allowOverlap,
  icon,
  scale = 0.6,
  offset = {
    top: 0.35,
    right: 0.55,
  },
  borderWidth = 0.15,
}: WithIconProps) => {
  if (React.Children.count(children) !== 1) {
    console.error('Invalid number of children for WithIcon');
    return null;
  }

  const overlapProtection = allowOverlap ? {} : {
    marginTop: `${(offset.top - borderWidth) * scale}em`,
    marginRight: `${(offset.right - borderWidth) * scale}em`,
  };

  return (
    <Box sx={{
      position: 'relative',
      width: maximise ? 'max-content' : 'auto',
      // Ensure the Platform icon doesn't overlap
      ...overlapProtection
    }}
    fontSize={fontSize || '1em'}
    >
      {children}
      <Box
        fontSize={`${scale}em`}
        sx={{
          position: 'absolute',
          right: `${-offset.right}em`,
          top: `${-offset.top}em`,
          zIndex: 2
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};


