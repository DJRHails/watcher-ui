/* eslint-disable @typescript-eslint/no-explicit-any */

// Based on: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/0bd28530564c3da2e728518084f22648af3a683c/types/rebass/index.d.ts

import { ResponsiveStyleValue, SystemStyleObject } from "@styled-system/css";
import * as React from "react";
import * as StyledComponents from "styled-components";
import * as StyledSystem from "styled-system";

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType;
  css?:
    | StyledComponents.CSSObject
    | StyledComponents.InterpolationWithTheme<any>
    | string;
}

export type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<
          string,
          SystemStyleObject | ResponsiveStyleValue<number | string>
        >
    >;

export interface SxProps {
  /**
   * The sx prop lets you style elements inline, using values from your theme.
   */
  sx?: SxStyleProp;
}

export interface BoxKnownProps
  extends BaseProps,
    StyledSystem.SpaceProps,
    StyledSystem.LayoutProps,
    StyledSystem.FontSizeProps,
    StyledSystem.ColorProps,
    StyledSystem.FlexProps,
    StyledSystem.OrderProps,
    StyledSystem.AlignSelfProps,
    SxProps {
  variant?: StyledSystem.ResponsiveValue<string>;
  tx?: string;
}
