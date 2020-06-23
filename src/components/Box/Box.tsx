import { flexbox, compose, space, layout, typography, color, SpaceProps, LayoutProps, FontSizeProps, ColorProps, FlexboxProps, styleFn } from "styled-system";
import styled, { CSSObject, DefaultTheme } from "styled-components";
import css, { get, SystemStyleObject, ResponsiveStyleValue } from "@styled-system/css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType;
  css?:
    | CSSObject
    | styleFn //TODO: Too permissive
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

export interface BoxProps
  extends BaseProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    ColorProps,
    FlexboxProps,
    SxProps {
  variant?: string;
  theme?: DefaultTheme;
}

const sx = ({sx, theme}: BoxProps) => css(sx)(theme);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const variant = ({theme, variant}: BoxProps) => css(get(theme!, variant!, {}))(theme);
export const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  variant,
  sx,
  props => props.css,
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  )
);
Box.displayName = "Box";