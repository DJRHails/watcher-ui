import { Box } from "./Box"

import {
  ButtonVariants,
  TypographyVariants,
  Variants,
  VariantTypes
} from "../../themes/theme"
import { BoxKnownProps } from "../../types/rebass"

export interface BoxProps
  extends BoxKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {
  variant?: Variants | TypographyVariants | ButtonVariants;
  tx?: VariantTypes;
}

export { Box }