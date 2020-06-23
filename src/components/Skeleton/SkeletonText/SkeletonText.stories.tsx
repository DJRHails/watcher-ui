import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";

import { SkeletonText } from "./SkeletonText";

const story: KindMeta<typeof SkeletonText> = {
  title: "Components/Skeleton/SkeletonText",
  component: SkeletonText,
};

export const text: StoryMeta = () => (
  <SkeletonText p={3} />
);

export const customSizeText: StoryMeta = () => (
  <SkeletonText
    noOfLines={8}
    skeletonHeight="1rem"
    p={3}
  />
);
export default story;