import Heading from "./Headings"
import { Text } from "./Text" 

import StyledSystem from "styled-system"
import { BoxKnownProps } from "../../types/rebass"

export interface TextKnownProps
  extends BoxKnownProps,
    StyledSystem.FontFamilyProps,
    StyledSystem.FontWeightProps,
    StyledSystem.FontStyleProps,
    StyledSystem.TextAlignProps,
    StyledSystem.LineHeightProps,
    StyledSystem.LetterSpacingProps {}

export {
  Heading,
  Text
}