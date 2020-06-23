import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";

import { Flex } from "./Flex";
import { Box, Text, Heading, Button, Circle } from "/components";

const story: KindMeta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
};


export const flexColumn: StoryMeta = () => (
  <Flex mx={-2}>
    <Box width={1 / 2} backgroundColor="brand" color="white" p={3} mx={2}>
      Half
    </Box>
    <Box width={1 / 2} backgroundColor="brand" color="white" p={3} mx={2}>
      Half
    </Box>
  </Flex>
);

export const flexSet: StoryMeta = () => (
  <>
    <Flex>
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
    </Flex>
    <Flex>
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
    </Flex>
    <Flex>
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
    </Flex>
    <Flex>
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
    </Flex>
    <Flex>
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
      <Box width={1} height={32} bg="brand" m={1} />
    </Flex>
  </>
);

export const asFlexWrap: StoryMeta = () => (
  <Flex wrap="wrap" mx={-2}>
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

export const header: StoryMeta = () => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding="1rem"
    backgroundColor="brand"
    color="white"
  >
    <Flex mr={5}>
      <Circle width={8} backgroundColor="background"/>
      <Heading.h1 fontWeight="bold" fontSize={3} p={0} pl={3}  m={0}>
      Watcher UI
      </Heading.h1>
    </Flex>
    <Box
      display="block"
      width="auto"
      alignItems="center"
      flexGrow={1}
    >
      <Button variant="text" buttonColor="background">Docs</Button>
      <Button variant="text" buttonColor="background">Examples</Button>
      <Button variant="text" buttonColor="background">Blog</Button>
    </Box>

    <Box
      display="block"

    >
      <Button variant="outline" buttonColor="white" size="sm">
      Create account
      </Button>
    </Box>
  </Flex>
);


export default story;