import React from "react";
import { Text, TextProps } from "./Text";
import { TypographyVariants } from "../../themes/theme";

export interface HeadingProps
  extends TextProps,
    Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextProps> {
  variant?: TypographyVariants;
}

const h1: React.FC<HeadingProps> = props => <Text variant="h1" {...props} />;

// const h2: React.FC<TextProps> = (props) => (
//   <Text variant="h2" {...props} />
// );

const Heading = {
  h1
  // h2: h2,
};

export default Heading;
