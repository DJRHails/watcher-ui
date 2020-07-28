import React, { FC } from 'react';
import { BoxProps, Box, WithPlatform, PlatformDefiniton } from '/components';
import { Jazzicon } from './Jazzicon';

export interface IdenticonProps extends BoxProps {
  address: string;
  diameter?: number;
  allowOverlap?: true;
  platform?: PlatformDefiniton;
} 

const looksLikeEthereum = (address: string) => address.startsWith('0x');

export const Identicon: FC<IdenticonProps> = ({
  address,
  diameter = 50,
  platform,
  allowOverlap,
  ...rest
}: IdenticonProps) => {

  if (looksLikeEthereum(address)) {
    const icon = <Jazzicon address={address} diameter={diameter}/>;
    const iconWithPlatform = (
      platform
        ? (
          <WithPlatform
            maximise
            allowOverlap={allowOverlap}
            fontSize={`${diameter}px`}
            platform={platform}
          >
            {icon}
          </WithPlatform>
        )
        : icon
    );
    return (
      <Box size={`${diameter}px`} {...rest}>
        {iconWithPlatform}
      </Box>
    );
  }
  return (
    <Box {...rest}>
      Unknown Address
    </Box>
  );
};
Identicon.displayName='Identicon';
