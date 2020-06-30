import React, { FC } from "react";
import { Flex, FlexProps } from "/components";

export interface ContainerProps extends FlexProps {} 

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <Flex
      direction="column"
      maxWidth="75rem"
      mx="auto"
      px={3}
      {...props}
    />
  );
};
Container.displayName="Container";