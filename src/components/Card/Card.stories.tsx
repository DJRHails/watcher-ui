import React from "react"
import { Icon } from "@rimble/icons"

import { StoryMeta } from "../../types/storybook"
import { Card, CardProps } from "./Card"
import { Box } from "../Box"
import { Image } from "../Image"
import { Text } from "../Typography"
import { Flex } from "reflexbox/styled-components"
import { Badge } from "../Badge"

export default {
  title: "Components/Card",
  component: Card
}

export const airbnbCard: StoryMeta = () => (
  <Card variant="outline" maxWidth='20em' p={3}>
    <Image src="https://bit.ly/2k1H1t6" sx={{borderRadius: 1}}/>
    <Flex alignItems="baseline" mt={2}>
      <Badge color="brand">Plus</Badge>
      <Text
        ml={2}
        textTransform="uppercase"
        fontSize={1}
        fontWeight="bold"
        color="brand"
      >
      Verified &bull; Cape Town
      </Text>
    </Flex>
    <Text mt={2} fontSize={3} fontWeight="bold" lineHeight="snug">
      Modern, Chic Penthouse with Mountain, City & Sea Views
    </Text>
    <Text mt={2} fontSize={1}>$119/night</Text>
    <Flex mt={2} alignItems="center">
      <Icon name="Star" color="#ED8936"/>
      <Text ml={1} fontSize={2}><b>4.84</b> (190)</Text>
    </Flex>
  </Card>
)

export const cryptoKittiesCard: StoryMeta = () => (
  <Card maxWidth='20em'>
    <Box bg="#e5f3e2" sx={{
      borderRadius: "lg",
      transition: "box-shadow 200ms cubic-bezier(0.4,0,0.2,1)",
      // transitionProperty: "shadow",
      // transitionDuration: "300",
      // transitionTimingFunction: "in-out",
      "&:hover": {
        "--outline-color": "#e5f3e2",
        boxShadow: "outline",
      }
    }}>
      <Image ml="-8.25%" maxWidth="116.5%" src="https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1675025.png"/>
    </Box>
    <Flex
      alignItems="baseline"
      mt={2}
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Text
          fontWeight="bold"
        >#</Text>
        <Text
          ml={1}
          lineHeight="snug"
          letterSpacing="tight"
          fontSize={1}
          fontWeight="bold"
        >
        1675025
        </Text>
      </Flex>
      <Flex alignItems="center" color="muted">
        <Icon name="FavoriteBorder" size="16px"/>
        <Text ml={1} fontSize={1} fontWeight="bold">
          2
        </Text>
      </Flex>
    </Flex>
    <hr/>
    <Flex alignItems="center" color="muted">
      <Icon name="AllInclusive" size="16px"/>
      <Text ml={1} fontSize={1}>
        Gen 1
      </Text>
      <Icon ml={3} name="AccessTime" size="16px"/>
      <Text ml={1} fontSize={1}>
        Fast (1m)
      </Text>
    </Flex>
  </Card>
)

cryptoKittiesCard.story = {
  name: "CryptoKitties Card"
}

interface TokenCardProps extends CardProps {
  name: string;
  quantity: number;
  value: number;
}

const TokenCard: React.FC<TokenCardProps> = ({name, quantity, value, ...props}: TokenCardProps) => {
  const upper = Math.floor(quantity)
  const lower = (quantity % 1).toFixed(4).substring(2)
  return (
    <Card maxWidth='10em' {...props}>
      <Flex alignItems="center">
        <Icon name={name} size="25%"/>
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
        { lower != "0000" &&
          <Text fontSize={1} fontWeight="light">
          .{lower}
          </Text>
        }
      </Flex>
      <Text mt={3} fontSize={1} fontWeight="light" color="muted">
        {value >= 0 ? `$${value}` : "-"}
      </Text>
    </Card>
  )
}

export const tokenCard: StoryMeta = () => (
  <Flex ml={-2}>
    <TokenCard
      ml={2}
      name="Eth"
      quantity={1.5}
      value={348.11}
    />
    <TokenCard
      ml={2}
      name="Ant"
      quantity={588}
      value={648.22}
    />
    <TokenCard
      ml={2}
      name="Bcc"
      quantity={500}
      value={-1}
    />
    <TokenCard
      ml={2}
      name="Dai"
      quantity={1000}
      value={1005.03}
    />
    <TokenCard
      ml={3}
      name="Mana"
      quantity={501}
      value={20.59}
    />
  </Flex>
) 