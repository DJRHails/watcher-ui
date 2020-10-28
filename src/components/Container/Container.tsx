import React, { FC } from 'react';
import { Flex, FlexProps } from '/components';

export interface ContainerProps extends FlexProps {
  fluid?: true;
} 

export const Container: FC<ContainerProps> = ({fluid, ...props}: ContainerProps) => {
  if (fluid) {
    return (
      <Flex
        direction="column"
        maxWidth="120ch"
        mx="auto"
        {...props}
      />
    );
  }
  return (
    <Flex
      direction="column"
      maxWidth="120ch"
      mx="auto"
      px={3}
      {...props}
    />
  );
};
Container.displayName='Container';
