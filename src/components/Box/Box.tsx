import React from "react";
import * as Reflex from "reflexbox/styled-components";
import { BoxKnownProps } from "../../types/rebass";


export interface BoxProps
  extends BoxKnownProps,
  Omit<React.HTMLProps<HTMLDivElement>, keyof BoxKnownProps> {
  variant?: string;
  tx?: string;
}

export const Box: React.FC<BoxProps> = React.forwardRef((props, ref) => (
  <Reflex.Box
    // eslint-disable-next-line react/prop-types,@typescript-eslint/no-explicit-any
    color={props.color as any} // https://github.com/rebassjs/rebass/issues/921
    ref={ref}
    {...props}
  />
));
Box.displayName = "Box";