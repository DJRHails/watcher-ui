import React, { FC } from 'react';
import { PlatformDefiniton, getReverse } from './Platform';
import { WithIconProps, WithIcon } from '../Icon/WithIcon';
import { PlatformIndicator } from './PlatformIndicator';


export interface WithPlatformProps extends Omit<WithIconProps, 'icon'> {
  flipped?: true;
  platform: PlatformDefiniton;
}

export const WithPlatform: FC<WithPlatformProps> = ({
  platform,
  flipped,
  ...props
}: WithPlatformProps) => {

  const borderWidth = .15;

  const icon = <PlatformIndicator
    borderWidth={borderWidth}
    front={platform}
    back={getReverse(platform)}
    flipped={flipped} />;

  return <WithIcon icon={icon} borderWidth={borderWidth} {...props} />;
};
