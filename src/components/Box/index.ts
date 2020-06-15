import { Box } from "./Box"

import {
  ButtonVariants,
  TypographyVariants,
  Variants,
  VariantTypes,
  CardVariants
} from "../../themes/theme"
import { BoxKnownProps } from "../../types/rebass"

export interface BoxProps
  extends BoxKnownProps,
    Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {
  variant?: Variants | TypographyVariants | ButtonVariants | CardVariants;
  tx?: VariantTypes;
}

export { Box }