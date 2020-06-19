import React from "react";
import { Icon as RimbleIcon, IconProps as RimbleIconProps, CryptoIcons } from "@rimble/icons";
import { Image } from "..";
import { Circle } from "..";
import { Text } from "..";
import { Box, BoxProps } from "../Box";

export interface IconInnerProps extends Omit<RimbleIconProps, "name"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textColor?: any; // TODO: Replace with Styled System color type
  name: RimbleIconProps["name"] | "Algo"
}

export interface IconProps extends BoxProps {
  name: string;
  innerSize?: string;
} 

const IconInner: React.FC<IconInnerProps> = ({
  name,
  size = "2em",
  color,
  textColor,
}: IconInnerProps) => {
  const [valid, setValid] = React.useState<boolean>(true);

  const rimble = <RimbleIcon name={name as RimbleIconProps["name"]} size={size} color={textColor} />;

  if (rimble) {
    return rimble;
  }

  if (valid) {
    return (
      <Image
        size={size}
        src={`https://etherscan.io/token/images/${name.toLowerCase()}_32.png`}
        onError={() => setValid(false)}
      />
    );
  }

  if (name === "Algo") {
    return (
      <Circle
        size={size}
        fontSize={size}
        backgroundColor={color}
      >
        <Image
          src={`https://algoexplorer.io/images/${name.toLowerCase()}.png`}
          size={size}
        />
      </Circle>
    );
  }

  return (
    <Circle
      size={size}
      fontSize={size}
      backgroundColor={color}
    >
      <Text
        fontSize=".7em"
        fontWeight="bold"
        color={textColor}
      >{name[0]}</Text>
    </Circle>
  );
  // return <RimbleIcon name="Generic" size={size} color={color} />;

};

export const Icon: React.FC<IconProps> = ({
  name,
  size = "2em",
  innerSize = "100%",
  color,
  backgroundColor,
  ...rest
}: IconProps) => {
  return (
    <Box size={size} {...rest}>
      <IconInner name={name as CryptoIcons} size={innerSize} color={backgroundColor} textColor={color}/>
    </Box> 
  );
};
Icon.displayName="Icon";