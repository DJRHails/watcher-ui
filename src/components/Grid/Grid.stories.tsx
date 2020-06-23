import React from "react";
import { KindMeta, StoryMeta } from "/types/storybook";

import { Grid } from "./Grid";
import { Box } from "../Box";

const story: KindMeta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
};

export const responsiveGrid: StoryMeta = () => (
  <Grid columns={[2, null, 3]} spacing="40px">
    <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box>
    <Box bg="tomato" height="80px"></Box>
  </Grid>
);

export default story;