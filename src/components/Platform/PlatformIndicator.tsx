import React, { FC } from 'react';
import { Box } from '/components';
import { PlatformDefiniton } from './Platform';
import { PlatformIcon } from './PlatformIcon';


export interface PlatformIndicatorProps {
  borderWidth: number;
  front: PlatformDefiniton;
  flipped?: true;
  back?: PlatformDefiniton;
}

export const PlatformIndicator: FC<PlatformIndicatorProps> = ({
  borderWidth,
  flipped,
  front,
  back,
}: PlatformIndicatorProps) => (
  <Box
    sx={{
      transition: '0.6s',
      transformStyle: 'preserve-3d',
      position: 'relative',
      transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
    }}
  >
    <PlatformIcon
      borderWidth={borderWidth}
      platform={front}
      sx={back && {
        position: 'absolute',
      }} />
    {back && <PlatformIcon
      borderWidth={borderWidth}
      platform={back}
      sx={{
        transform: 'rotateY(180deg)',
      }} />}
  </Box>
);
