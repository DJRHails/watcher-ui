import React from "react";
import { isWatcherIcon, WatcherIcon, WatcherIconProps } from "watcher-icons";
import { Image, Circle, Text } from "..";
import { Box, BoxProps } from "../Box";
import styled from "styled-components";
import { color, ColorProps } from "styled-system";
import _ from "lodash";
import { PropsOf } from "../../types/utils";

export interface IconInnerProps extends Omit<WatcherIconProps, "name"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  color?: ColorProps["color"]; 
  backgroundColor?: ColorProps["backgroundColor"];
  size?: string;
  name: string;
}

export interface IconProps extends BoxProps {
  name: string;
}

const StyledWatcherIcon = styled(WatcherIcon)(
  color,
);

export const ETHERSCAN_NAMESPACE = "ethscn.";
const isEtherscanIcon = (name: string) => name.startsWith(ETHERSCAN_NAMESPACE);
const etherscanTransform = (name: string) => name.substring(ETHERSCAN_NAMESPACE.length).toLowerCase();

const watcherTransform = (name: string) => _.upperFirst(_.camelCase(name));

const LEN2FONT = {
  0: "1.em",
  1: ".6em",
  2: ".5em",
  3: ".4em",
  4: ".3em",
};

const IconInner: React.FC<IconInnerProps> = ({
  name,
  size,
  backgroundColor,
  color,
}: IconInnerProps) => {
  
  if (isWatcherIcon(watcherTransform(name))) {
    const watcherProps: PropsOf<typeof StyledWatcherIcon> = {
      name: watcherTransform(name),
      width: size,
      height: size,
      ...( color && { color: color } ),
      ...( backgroundColor && { color: backgroundColor } ) // This trick ensures that color isn't passed in if not set (preventing undefined overwrite).
    };
    return (
      <StyledWatcherIcon
        {...watcherProps}
      />);
  }

  if (isEtherscanIcon(name)) {
    return (
      <Image
        size={size}
        src={`https://etherscan.io/token/images/${etherscanTransform(name)}_32.png`}
      />
    );
  }
  
  const displayName = name.substring(0, 4);
  return (
    <Circle
      size="1em"
      fontSize={size}
      backgroundColor={backgroundColor || "brand"}
    >
      <Text
        fontSize={_.get(LEN2FONT, displayName.length) || "1em"}
        fontWeight="bold"
        color={color || "white"}
      >{displayName}</Text>
    </Circle>
  );
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = "1em",
  color,
  backgroundColor,
  ...rest
}: IconProps) => {
  return (
    <Box
      {...rest}
    >
      <IconInner
        name={name}
        size={size}
        backgroundColor={backgroundColor}
        color={color}
      />
    </Box> 
  );
};
Icon.displayName="Icon";