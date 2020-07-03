import React, { FC } from 'react'
import { Card, CardProps } from '../Card'
import { Text, Flex, Icon, IconProps } from '../..'

export interface TokenCardProps 
  extends CardProps,
  Omit<React.HTMLProps<HTMLDivElement>, keyof CardProps> {
  name: IconProps['name'];
  quantity: number;
  value: number;
}

export const TokenCard: FC<TokenCardProps> = ({ name, quantity, value, ...props }: TokenCardProps) => {
  const upper = Math.floor(quantity)
  const lower = (quantity % 1).toFixed(4).substring(2)
  return (
    <Card minWidth="10rem" {...props}>
      <Flex alignItems="center">
        <Icon name={name} size="2rem"/>
        <Text
          ml={2}
          color="gray"
          fontSize={1}
          fontWeight="light"
          uppercase
        >
          {name}
        </Text>
      </Flex>
      <Flex mt={3} alignItems="baseline">
        <Text fontSize={4} fontWeight="light">
          {upper}
        </Text>
        {lower !== '0000' &&
          <Text fontSize={1} fontWeight="light">
            .{lower}
          </Text>}
      </Flex>
      <Text mt={3} fontSize={1} fontWeight="light" color="gray">
        {value >= 0 ? `$${value}` : '-'}
      </Text>
    </Card>
  )
}
TokenCard.displayName='TokenCard'