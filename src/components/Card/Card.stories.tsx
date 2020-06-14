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

