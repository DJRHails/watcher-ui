import React from "react";
import { Box } from "./Box";

export default {
  title: "Components/Box",
  component: Box
};

export const withColor = () => (
  <Box color="white" backgroundColor="black">A big red box</Box>
);
