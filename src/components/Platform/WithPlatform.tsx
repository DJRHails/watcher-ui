import React, { FC,  ReactNode } from 'react';
import { Box, Icon, IconProps } from '/components';
import { PlatformDefiniton, getIconName, getIconBackgroundColor,  getSize, getReverse } from './Platform';
import { FontSizeProps } from 'styled-system';

export interface PlatformIconProps {
  borderWidth: number;
  platform: PlatformDefiniton;
  sx?: IconProps['sx'];
}

const PlatformIcon: FC<PlatformIconProps> = ({
  borderWidth,
  platform,
  sx,
}: PlatformIconProps) => (
  <Icon
    size="1em"
    sx={{
      backfaceVisibility: 'hidden',
      borderRadius: '99999px',
      borderStyle: 'solid',
      borderColor: 'background',
      borderWidth: `${borderWidth}em`,
      ...sx ?? {},
    }}
    name={getIconName(platform)}
    backgroundColor={getIconBackgroundColor(platform)}
  />
);

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
      }}
    />
    {back && <PlatformIcon
      borderWidth={borderWidth}
      platform={back}
      sx={{
        transform: 'rotateY(180deg)',
      }}
    />
    }
  </Box>
);

export interface WithPlatformProps extends FontSizeProps {
  children: ReactNode;
  maximise?: true;
  allowOverlap?: true;
  flipped?: true;
  platform: PlatformDefiniton;
}

export const WithPlatform: FC<WithPlatformProps> = ({
  children,
  platform,
  fontSize,
  maximise,
  allowOverlap,
  flipped
}: WithPlatformProps) => {
  if (React.Children.count(children) !== 1) {
    console.error('Invalid number of children for WithPlatform');
    return null;
  }

  const borderWidth = .15;
  const scale = 0.6;
  const offset = {
    top: 0.35,
    right: 0.55,
  };

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
    fontSize={fontSize || getSize(platform) || '1em'}
    >
      {children}
      <Box
        fontSize={`${scale}em`}
        sx={{
          position: 'absolute',
          right: `-${offset.right}em`,
          top: `-${offset.top}em`,
          zIndex: 2
        }}
      >
        <PlatformIndicator
          borderWidth={borderWidth}
          front={platform}
          back={getReverse(platform)}
          flipped={flipped}
        />
      </Box>
    </Box>
  );
};
