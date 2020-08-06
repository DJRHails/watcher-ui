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

/**
 * Remove the 0x and take the first ten base16 characters
 * @param address The Ethereum Address (0x...)
 */
function ethSeed(address: string): number {
  return parseInt(address.slice(2, 10), 16);
}

/**
 * Take the first 6 characters and decode base32
 * @param address The Algorand Address b32
 */
function algoSeed(address: string): number {
  return parseInt(address.slice(0, 6), 32);
}


export const Identicon: FC<IdenticonProps> = ({
  address,
  diameter = 50,
  platform,
  allowOverlap,
  ...rest
}: IdenticonProps) => {

  const seed = looksLikeEthereum(address) ? ethSeed(address) : algoSeed(address);

  const icon = <Jazzicon seed={seed} diameter={diameter}/>;
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
};
Identicon.displayName='Identicon';
