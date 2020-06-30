import React, { FC, ReactNode } from "react";
import { FlexProps, Flex, Box } from "/components";
import { SpaceProps, ResponsiveValue } from "styled-system";
import { getValidChildren } from "/utils/react";
import { mapResponsive } from "/utils/responsive";

export type StackDirection = ResponsiveValue<"row" | "column">

export interface StackProps extends FlexProps {
  spacing?: SpaceProps["margin"];
  direction?: StackDirection;
  divider?: React.ReactElement;
  shouldWrapChildren?: true;
  children?: ReactNode;
} 

export const Stack: FC<StackProps> = React.forwardRef<StackProps>((props: StackProps, ref) => {
  const {
    direction = "column",
    align = "flex-start",
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    shouldWrapChildren,
    ...rest
  } = props;

  const selector = "& > *:not(style) ~ *:not(style)";

  const styles = {
    flexDirection: direction,
    [selector]: mapResponsive(direction, (value) => ({
      [value === "column" ? "marginTop" : "marginLeft"]: spacing,
      [value === "column" ? "marginLeft" : "marginTop"]: 0,
    })),
  };

  const validChildren = getValidChildren(children);
  
  const dividerProps = mapResponsive(direction, (value) => {
    if (value === "row") {
      return {
        direction: "row",
        mx: spacing,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      };
    }
    return {
      direction: "column",
      mx: 0,
      my: spacing,
      borderLeftWidth: 0,
      borderBottomWidth: "1px",
    };
  });

  const hasDivider = !!divider;

  const clones = validChildren.map((child, index) => {
    const isLast = index + 1 === validChildren.length;
    const _child = shouldWrapChildren ? <Box display="inline-block" flex="0">{child}</Box> : child;

    if (!hasDivider) return _child;

    if (!isLast) {
      return (
        <React.Fragment key={index}>
          {_child}
          {divider && React.cloneElement(divider, dividerProps)}
        </React.Fragment>
      );
    }

    return _child;
  });

  const sx = hasDivider ? undefined : { [selector]: styles[selector] };

  return (
    <Flex
      ref={ref}
      align={align}
      justify={justify}
      direction={styles.flexDirection}
      wrap={wrap}
      sx={sx}
      {...rest}
    >
      {clones}
    </Flex>
  );}
);
