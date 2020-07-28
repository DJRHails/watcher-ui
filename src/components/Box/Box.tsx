import { flexbox, compose, space, layout, typography, color, border, background, BackgroundProps, BorderProps, SpaceProps, LayoutProps, FontSizeProps, ColorProps, FlexboxProps, styleFn } from 'styled-system';
import styled, { CSSObject, DefaultTheme } from 'styled-components';
import css, { SystemStyleObject, ResponsiveStyleValue } from '@styled-system/css';

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
    BackgroundProps,
    SxProps,
    VariantProps {}

// eslint-disable-next-line
export const sx = ({sx, theme}: ThemeProps & SxProps)  => css(sx)(theme);

export const box: styleFn = compose(
  space,
  layout,
  typography,
  color,
  flexbox,
  border,
  background,
  (props) => props.css,
);

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  ${box}
  ${sx}
`;
Box.displayName = 'Box';
