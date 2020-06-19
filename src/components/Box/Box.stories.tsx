import React from "react";
import { Flex } from "reflexbox/styled-components";
import { Text } from "../Text";
import { Box } from "./Box";
import { StoryMeta } from "../../types/storybook";

export default {
  title: "Components/Box",
  component: Box
};

export const withColor: StoryMeta = () => (
  <Box p={3} color="brand" backgroundColor="background">
    Brand Colour on Surface
  </Box>
);

export const withResponsive: StoryMeta = () => (
  <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="brand">
    Box
  </Box>
);

export const asFlexGrid: StoryMeta = () => (
  <Flex mx={-2}>
    <Box width={1 / 2} px={2}>
      Half
    </Box>
    <Box width={1 / 2} px={2}>
      Half
    </Box>
  </Flex>
);

export const backgroundImageCard: StoryMeta = () => (
  <Box
    sx={{
      px: 4,
      py: 6,
      backgroundImage: "url(https://source.unsplash.com/random/1024x768?sky)",
      backgroundSize: "cover",
      borderRadius: "lg",
      color: "white",
      bg: "gray",
      textAlign: "center",
      fontSize: 6,
    }}
  >

      Background Image
  </Box>
);

export const asFlexWrap: StoryMeta = () => (
  <Flex flexWrap="wrap" mx={-2}>
    <Box p={2} width={1 / 4}>
      <Text p={1} color="background" bg="brand">
        1/4
      </Text>
    </Box>
    <Box p={2} width={1 / 2}>
      <Text p={1} color="background" bg="brand">
        1/2
      </Text>
    </Box>
    <Box p={2} width={1 / 3}>
      <Text p={1} color="background" bg="brand">
        1/3
      </Text>
    </Box>
    <Box p={2} width={1 / 3}>
      <Text p={1} color="background" bg="brand">
        1/3
      </Text>
    </Box>
    <Box p={2} width={1 / 3}>
      <Text p={1} color="background" bg="brand">
        1/3
      </Text>
    </Box>
    <Box p={2} width={1 / 4}>
      <Text p={1} color="background" bg="brand">
        1/4
      </Text>
    </Box>
    <Box p={2} width={1 / 4}>
      <Text p={1} color="background" bg="brand">
        1/4
      </Text>
    </Box>
    <Box p={2} width={1 / 4}>
      <Text p={1} color="background" bg="brand">
        1/4
      </Text>
    </Box>
    <Box px={2} py={2} width={1 / 4}>
      <Text p={1} color="background" bg="brand">
        1/4
      </Text>
    </Box>
  </Flex>
);
