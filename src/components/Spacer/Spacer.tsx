import React from "react";
import { FlexProps, Flex } from "/components";

export interface SpacerProps extends FlexProps {} 

export const Spacer: React.FC<SpacerProps> = React.forwardRef((props, ref) => (
  <Flex
    grow={1}
    ref={ref}
    {...props}
  />
));
Spacer.displayName="Spacer";