import { flexbox, compose, space, layout, typography, color, SpaceProps, LayoutProps, FontSizeProps, ColorProps, FlexboxProps } from "styled-system";
import styled from "styled-components";
import css, { get } from "@styled-system/css";
import { BaseProps, SxProps } from "../../types/rebass";


export interface BoxProps
  extends BaseProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    ColorProps,
    FlexboxProps,
    SxProps {
  variant?: string;
  theme?: any;
}

const sx = ({sx, theme}: BoxProps) => css(sx)(theme);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const variant = ({theme, variant}: BoxProps) => css(get(theme, variant!, {}))(theme);
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