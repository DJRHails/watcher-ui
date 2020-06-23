import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";
import { Box, Heading } from "/components";

import { StickyFooter } from "./StickyFooter";

const story: KindMeta<typeof StickyFooter> = {
  title: "Components/StickyFooter",
  component: StickyFooter,
};

export const standard: StoryMeta = () => (
  <StickyFooter footer={
    <Box width="full" height="3em" bg="brand"/>
  }>
    <Heading.h1 p={5}>Sticky Footer</Heading.h1>
  </StickyFooter>
);

export default story;