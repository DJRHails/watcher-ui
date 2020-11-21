import React, { FC } from 'react';
import { Text, Icon, Flex, Box, IconProps, FlexProps, WithPlatform } from '/components';
import _ from 'lodash';
import { PlatformDefiniton } from '../Platform/Platform';

export interface AssetProps extends FlexProps {
  name: string;
  ticker: string;
  full?: true;
  flipped?: true;
  icon?: IconProps;
  platform?: PlatformDefiniton;
}

export const Asset: FC<AssetProps> = ({
  name,
  ticker,
  color,
  platform,
  icon,
  full,
  flipped,
  ...rest
}: AssetProps) => {
  const iconSize = full ? '2.5em' : '2em';
  const assetIcon = <Icon {..._.merge({ name: ticker }, icon)}/>;
  return (
    <Flex p={1} {...rest}>
      <Box fontSize={iconSize}>
        {platform ? 
          <WithPlatform flipped={flipped} platform={platform}>
            {assetIcon}
          </WithPlatform>
          : assetIcon
        }
      </Box>
      <Box
        display="inline-grid"
        flex={1}
        ml={2}
      >
        <Text
          color={color as string} // TODO: Styled Components are getting interesting color overrides
          fontWeight="medium"
          truncate
        >
          {name}
        </Text>
        {full && <Text
          color={color as string} // TODO: Styled Components are getting interesting color overrides
          fontWeight="light"
          uppercase
          sx={{
            minWidth: '10ch',
          }}
        >
          {ticker}
        </Text>}
      </Box>
    </Flex>
  );
};
Asset.displayName='Asset';
