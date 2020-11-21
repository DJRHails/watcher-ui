import React, { FC } from 'react';
import { Icon, IconProps } from '/components';
import { PlatformDefiniton, getIconName, getIconBackgroundColor } from './Platform';


export interface PlatformIconProps {
  borderWidth: number;
  platform: PlatformDefiniton;
  sx?: IconProps['sx'];
}
export const PlatformIcon: FC<PlatformIconProps> = ({
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
    backgroundColor={getIconBackgroundColor(platform)} />
);
