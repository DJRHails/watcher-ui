import React from "react";
import { Icon } from "@rimble/icons";
import { BoxProps } from "../Box";
import { Text } from "../Typography";
import { Flex } from "reflexbox/styled-components";
import { FlexboxProps } from "styled-system";

export interface AssetProps extends FlexboxProps {
  name: string
} 

export const Asset: React.FC<AssetProps> = ({
  name,
  ...rest
}: AssetProps) => {
  return (
    <Flex alignItems="center" {...rest}>
      <Icon name={name} pr={1}/>
      <Text
        ml={2}
        fontWeight="light"
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Flex>
  );
};
Asset.displayName="Asset";