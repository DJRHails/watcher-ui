import React from "react";
import styled from "styled-components";
import * as CSS from "csstype";
import { Icon } from "@rimble/icons";
import { typography, SpaceProps, LayoutProps, TypographyProps, space, layout } from "styled-system";
import { BaseProps } from "../../types/rebass";
import { getValidChildren } from "../../utils/react";
import { IconProps } from "..";

interface KnownListProps extends BaseProps, SpaceProps, LayoutProps, TypographyProps {}

export interface ListProps
  extends KnownListProps,
    Omit<React.HTMLProps<HTMLUListElement>, keyof KnownListProps> {
  styleType?: CSS.ListStyleTypeProperty;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spacing?: any; // TODO: Fix this type
}

const StyledList = styled.ul<{listStyleType: CSS.ListStyleTypeProperty;}>(
  (props) => `list-style-type: ${props.listStyleType};`,
  {
    listStylePosition: "inside",
    padding: 0, // TODO: Move to CSSReset
    margin: 0,
  },
  space,
  layout,
  typography,
);

export const List: React.FC<ListProps> = ({
  as = "ul",
  styleType = "none",
  spacing,
  children,
  ...rest
}: ListProps) => {
  const validChildren = getValidChildren(children);
  return (
    <StyledList
      as={as}
      listStyleType={styleType}
      {...rest}
    >
      {validChildren.map((child, index) => {
        const isLast = index + 1 === validChildren.length;
        if (isLast)
          return child;
        return spacing ? React.cloneElement(child, { mb: spacing }) : child;
      })}
    </StyledList>
  );
};
List.displayName = "List";

const StyledListItem = styled.li(space);

export interface ListItemProps extends BaseProps, SpaceProps, Omit<React.HTMLProps<HTMLLIElement>, keyof BaseProps> {
  variant?: "check" | "cross";
}

export const ListItem: React.FC<ListItemProps> = ({
  variant,
  children,
  ...rest
}: React.PropsWithChildren<ListItemProps>) => {
  return (
    <StyledListItem
      {...rest}
    >
      { variant === "check" && <ListIcon name="Check" color="success" /> }
      { variant === "cross" && <ListIcon name="Close" color="danger" /> }
      { children }
    </StyledListItem>
  );
};
ListItem.displayName =  "ListItem";


interface ListIconProps extends IconProps {
  role?: string;
}

const StyledListIcon = styled(Icon)<ListIconProps>(
  layout,
);

export const ListIcon: React.FC<ListIconProps> = (props) => (
  <StyledListIcon
    role="presentation"
    mr={2}
    display="inline"
    size="1em"
    verticalAlign="text-bottom"
    {...props}
  />
);