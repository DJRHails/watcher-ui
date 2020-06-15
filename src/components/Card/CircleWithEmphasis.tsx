import React from "react";
import { Icon } from "@rimble/icons";
import { Box } from "../Box";
import { Pill } from "../Pill";
import { AspectRatio } from "../AspectRatio";

export const CircleWithEmphasis = () => <Box width={12}>
  <AspectRatio ratio={1}>
    <Pill
      width="full"
      mb={3}
      borderRadius="full"
      color="green"
      p={2}
    >
      <Pill
        height="full"
        width="full"
        borderRadius="full"
        borderColor="success"
        borderWidth={2}
        borderStyle="solid"
        p={0}
        color="white"
      >
        <Icon name="Check" size="1.25rem" color="success" m="auto" />
      </Pill>
    </Pill>
  </AspectRatio>
</Box>;
