import React from "react";
import { KindMeta, StoryMeta } from "../../types/storybook";

import { Circle } from "./Circle";
import { Text } from "..";

const story: KindMeta<typeof Circle> = {
  title: "Components/Circle",
  component: Circle,
};

export const standard: StoryMeta = () => (
  <Circle
    color="white"
    backgroundColor="brand"
  >
    Circle
  </Circle>
);

export const size: StoryMeta = () => (
  <Circle
    width={32}
    color="white"
    backgroundColor="brand"
  />
);

export const double: StoryMeta = () => (
  <Circle
    width={16}
    backgroundColor="badge.success"
  >
    <Circle
      width={12}
      borderRadius="full"
      borderColor="success"
      borderWidth={2}
      borderStyle="solid"
      backgroundColor="white"
      color="success"
    >
      <Text fontWeight="bold">A</Text>
    </Circle>
  </Circle>
);

export default story;