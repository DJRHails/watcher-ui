import React from "react";
import { Text, TextProps } from "./Text";
import { TypographyVariants } from "../../themes/theme";

export interface HeadingProps
  extends TextProps,
    Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextProps> {
  variant?: TypographyVariants;
}

const Heading: React.FC<HeadingProps> = (props) => <Text variant="heading" {...props} />;

const h1: React.FC<HeadingProps> = (props) => (
  <Heading
    fontSize={7}
    as="h1"
    {...props}
  />
);
const h2: React.FC<HeadingProps> = (props) => (
  <Heading
    fontSize={6}
    as="h2"
    {...props}
  />
);
const h3: React.FC<HeadingProps> = (props) => (
  <Heading
    fontSize={5}
    mt={2}
    as="h3"
    {...props}
  />
);
const h4: React.FC<HeadingProps> = (props) => (
  <Heading
    fontSize={4}
    mt={2}
    as="h4"
    {...props}
  />
);
const h5: React.FC<HeadingProps> = (props) => (
  <Heading
    fontSize={3}
    mt={1}
    as="h5"
    {...props}
  />
);
const h6: React.FC<HeadingProps> = (props) => (
  <Heading
    fontSize={2}
    mt={1}
    as="h6"
    {...props}
  />
);

const Headings = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};

export default Headings;
