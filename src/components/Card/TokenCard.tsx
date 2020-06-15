import React from "react";
import { Icon } from "@rimble/icons";
import { Card, CardProps } from "./Card";
import { Text } from "../Typography";
import { Flex } from "reflexbox/styled-components";

export interface TokenCardProps 
  extends CardProps,
  Omit<React.HTMLProps<HTMLDivElement>, keyof CardProps> {
  name: string;
  quantity: number;
  value: number;
}

export const TokenCard: React.FC<TokenCardProps> = ({ name, quantity, value, ...props }: TokenCardProps) => {
  const upper = Math.floor(quantity);
  const lower = (quantity % 1).toFixed(4).substring(2);
  return (
    <Card maxWidth='10em' {...props}>
      <Flex alignItems="center">
        <Icon name={name} size="25%" />
        <Text
          ml={2}
          color="muted"
          fontSize={1}
          fontWeight="light"
          textTransform="uppercase"
        >
          {name}
        </Text>
      </Flex>
      <Flex mt={3} alignItems="baseline">
        <Text fontSize={4} fontWeight="light">
          {upper}
        </Text>
        {lower !== "0000" &&
          <Text fontSize={1} fontWeight="light">
            .{lower}
          </Text>}
      </Flex>
      <Text mt={3} fontSize={1} fontWeight="light" color="muted">
        {value >= 0 ? `$${value}` : "-"}
      </Text>
    </Card>
  );
};
