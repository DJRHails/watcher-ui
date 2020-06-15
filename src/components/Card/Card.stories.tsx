import React from "react"
import { Icon } from "@rimble/icons"

import { StoryMeta } from "../../types/storybook"
import { Card } from "./Card"
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

