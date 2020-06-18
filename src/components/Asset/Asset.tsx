import React from "react";
import { Text } from "../Text";
import { FlexboxProps, ColorProps } from "styled-system";
import { Icon } from "../Icon";
import { Box } from "../Box";
import { Flex } from "reflexbox/styled-components";

export interface AssetProps extends FlexboxProps, ColorProps {
  name: string;
  icon?: string;
  platform?: string;
  iconProps?: {color: string};
  platformProps?: AssetProps;
} 

export const Asset: React.FC<AssetProps> = ({
  name,
  icon = name,
  platform,
  color,
  backgroundColor,
  platformProps,
  iconProps,
  ...rest
}: AssetProps) => {
  return (
    <Flex alignItems="center" p={1} {...rest}>
      { platform
        ? (
          <Box sx={{position: "relative"}}>
            <Icon
              name={icon}
              color={iconProps?.color}
              backgroundColor={backgroundColor}
            />
            <Icon
              backgroundColor={platformProps?.backgroundColor}
              name={platform}
              size="1.25em"
              color={platformProps?.color}
              sx={{
                borderRadius: "99999px",
                borderStyle: "solid",
                borderColor: "surface",
                borderWidth: ".15em",
                position: "absolute",
                right: "-0.5em",
                top: "-0.25em",
                zIndex: 2
              }}
              {...platformProps}
            />
          </Box>
        )
        : <Icon name={icon}/>}
      
      <Text
        ml={platform ? 3 : 2}
        color={color}
        fontWeight="medium"
        uppercase
      >
        {name}
      </Text>
    </Flex>
  );
};
Asset.displayName="Asset";