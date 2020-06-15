import React from "react";
import { Icon } from "@rimble/icons";

import { StoryMeta } from "../../types/storybook";
import { Card } from "./Card";
import { Box } from "../Box";
import { Image } from "../Image";
import { Text, Heading } from "../Typography";
import { Flex } from "reflexbox/styled-components";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { CircleWithEmphasis } from "./CircleWithEmphasis";

export default {
  title: "Components/Card",
  component: Card
};

export const namedCard: StoryMeta = () => (
  <Flex
    width="full"
    height="calc(100vh - 16px)"
    bg="rgba(0, 0, 0, 0.02)"
    alignItems="center"
  >
    <Card
      width="auto"
      maxWidth="md"
      mx="auto"
      px={[4, 4, 5]}
    >
      <Heading.h3>Heading</Heading.h3>

      <Box>
        <Text mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem
          ratione doloribus quidem neque provident eius error dignissimos delectus
          architecto nemo quos alias sunt voluptate impedit, facilis sequi tempore.
          Amet!
        </Text>
      </Box>

      <Button width={[1, "auto", "auto"]} mr={3}>
        Accept
      </Button>

      <Button variant="outline" width={[1, "auto", "auto"]} mt={[2, 0, 0]}>
        Cancel
      </Button>
    </Card>
  </Flex>
);

export const doCard: StoryMeta = () => (
  <Flex
    width="full"
    minHeight="calc(100vh - 16px)"
    bg="rgba(0, 0, 0, 0.02)"
    alignItems="center"
  >
    <Card
      width="auto"
      maxWidth="md"
      mx="auto"
      borderTop="4px solid"
      borderTopColor="green"
    >
      <Flex alignItems="center" mb={4}>
        <CircleWithEmphasis/>   
        <Heading.h5 ml={3}>Do</Heading.h5> 
      </Flex>

      <Text fontSize={1} as="p" mb={2}>
        Use specific language throughout. If the transaction is actually transfering a crypto asset, refer to that. Or if your users are casting a vote on the blockchain, reference the vote. This will spare users having to make connections in their head. 
      </Text>
      <Text fontSize={1} as="p">
      Echo the language you&apos;d use in the button to initiate the transaction e.g. Send Cryptokitty or Cast vote.
      </Text>
    </Card>
  </Flex>
);

export const imageCardWithSub: StoryMeta = () => (
  <Flex
    width="full"
    height="calc(100vh - 16px)"
    bg="rgba(0, 0, 0, 0.02)"
    alignItems="center"
  >
    <Card width="auto" maxWidth="md" mx="auto" my={5} p={0}>
      <Image
        width="full"
        src="https://source.unsplash.com/random/1280x720"
        alt="random image from unsplash.com"
      />

      <Box px={[3, 3, 4]} py={3}>
        <Heading.h4>Card title</Heading.h4>
        <Heading.h5 color="#666">Card sub-title</Heading.h5>
      </Box>
      <hr/>
      <Flex px={[3, 3, 4]} pb={3}>
        <Button variant="text" p="0" mr={[2, 3, 4]} height="auto">
      Text Button
        </Button>

        <Button variant="text" p="0" height="auto">
      Text Button
        </Button>
      </Flex>
    </Card>
  </Flex>
);


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
);

export const cryptoKittiesCard: StoryMeta = () => (
  <Card
    maxWidth='20em'
    boxShadow='none'
  >
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
);

cryptoKittiesCard.story = {
  name: "CryptoKitties Card"
};

