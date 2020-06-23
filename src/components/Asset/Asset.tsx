import React from "react";
import { Text } from "../Text";
import { FlexboxProps, ColorProps } from "styled-system";
import { Icon, Flex, Box } from "/components";
import _ from "lodash";
import { WithPlatform } from "./WithPlatform";
import { IconProps } from "../Icon";

export interface AssetProps extends FlexboxProps, ColorProps {
  name: string;
  ticker: string;
  full?: true;
  icon?: IconProps;
  platform?: IconProps;
}

export const Asset: React.FC<AssetProps> = ({
  name,
  ticker,
  color,
  platform,
  icon,
  full,
  ...rest
}: AssetProps) => {
  const iconSize = full ? "2.5em" : "2em";
  const assetIcon = <Icon {..._.merge({ name: ticker }, icon)}/>;
  return (
    <Flex p={1} {...rest}>
      <Box fontSize={iconSize}>
        {platform ? 
          <WithPlatform {...platform}>
            {assetIcon}
          </WithPlatform>
          : assetIcon
        }
      </Box>
      <Flex
        direction="column"
        ml={2}
      >
        <Text
          color={color}
          fontWeight="medium"
        >
          {name}
        </Text>
        {full && <Text
          color={color}
          fontWeight="light"
          uppercase
        >
          {ticker}
        </Text>}
      </Flex>
    </Flex>
  );
};
Asset.displayName="Asset";