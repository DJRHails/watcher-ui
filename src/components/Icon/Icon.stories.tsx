import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { Icon } from "../Icon";
import { Flex, Text } from "..";
import { ETHERSCAN_NAMESPACE } from "./Icon";

const story: KindMeta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
};

export const brandEth: StoryMeta = () => (
  <Icon name="Eth" color="brand"/>
);

export const check: StoryMeta = () => (
  <Icon name="Check" color="success" /> 
);

export const automatic: StoryMeta = () => (
  <>
    <Flex mb={3}>
      <Icon name="reallylongtoken"/>
      <Text ml={2}>reallylongtoken</Text>
    </Flex>
    <Flex mb={3}>
      <Icon name="spoink"/>
      <Text ml={2}>spoink</Text>
    </Flex>
    <Flex mb={3}>
      <Icon name="fake"/>
      <Text ml={2}>fake</Text>
    </Flex>
    <Flex mb={3}>
      <Icon name="THR"/>
      <Text ml={2}>THR</Text>
    </Flex>
    <Flex mb={3}>
      <Icon name="AX"/>
      <Text ml={2}>AX</Text>
    </Flex>
    <Flex>
      <Icon name="A"/>
      <Text ml={2}>A</Text>
    </Flex>
    
  </>
);

export const etherscan: StoryMeta = () => (
  <Icon name={`${ETHERSCAN_NAMESPACE}chai`}/>
);

export const algorand: StoryMeta = () => (
  <Icon name="Algo"/>
);

export default story;