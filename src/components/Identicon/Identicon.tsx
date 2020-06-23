import React from "react";
import { BoxProps, Box, IconProps, WithPlatform } from "..";
import { Jazzicon } from "./Jazzicon";
import _ from "lodash";

export interface IdenticonProps extends BoxProps {
  address: string;
  diameter?: number;
  platform?: IconProps | true;
} 

const looksLikeEthereum = (address: string) => address.startsWith("0x");

export const Identicon: React.FC<IdenticonProps> = ({
  address,
  diameter = 50,
  platform,
  ...rest
}: IdenticonProps) => {

  if (looksLikeEthereum(address)) {
    const icon = <Jazzicon address={address} diameter={diameter}/>;
    const iconWithPlatform = (
      platform
        ? (
          <WithPlatform
            fontSize={`${diameter}px`}
            {..._.merge({name: "Eth"}, platform)}
          >
            {icon}
          </WithPlatform>
        )
        : icon
    );
    return (
      <Box {...rest}>
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
Identicon.displayName="Identicon";