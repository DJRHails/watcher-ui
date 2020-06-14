import React from "react"
import { Text, TextKnownProps } from "./Text"
import { TypographyVariants } from "../../themes/theme"

export interface HeadingProps
  extends TextKnownProps,
    Omit<React.HTMLProps<HTMLHeadingElement>, keyof TextKnownProps> {
  variant?: TypographyVariants;
}

const h1: React.FC<HeadingProps> = props => <Text variant="h1" {...props} />

// const h2: React.FC<TextProps> = (props) => (
//   <Text variant="h2" {...props} />
// );

const Heading = {
  h1
  // h2: h2,
}

export default Heading
