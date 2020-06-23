import { flexbox, compose, space, layout, typography, color, border, BorderProps, SpaceProps, LayoutProps, FontSizeProps, ColorProps, FlexboxProps, styleFn } from "styled-system";
import styled, { CSSObject, DefaultTheme } from "styled-components";
import css, { get, SystemStyleObject, ResponsiveStyleValue } from "@styled-system/css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface BaseProps extends React.RefAttributes<any> {
  as?: React.ElementType;
  css?:
    | CSSObject
    | styleFn
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

export interface ThemeProps {
  theme?: DefaultTheme;
}

export interface SxProps {
  sx?: SxStyleProp;
}

export interface VariantProps {
  variant?: string;
}

export interface BoxProps
  extends BaseProps,
    ThemeProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    ColorProps,
    FlexboxProps,
    BorderProps,
    SxProps,
    VariantProps {}

// eslint-disable-next-line
export const sx = ({sx, theme}: ThemeProps & SxProps)  => css(sx)(theme);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const variant = ({theme, variant}: ThemeProps & VariantProps) => css(get(theme!, variant!, {}))(theme);
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
    border,
  )
);
Box.displayName = "Box";