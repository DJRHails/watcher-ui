import React from 'react';
import styled from 'styled-components';
import { typography, SpaceProps, LayoutProps, TypographyProps, space, layout } from 'styled-system';
import { getValidChildren } from '../../utils/react';
import { IconProps, Icon, BaseProps } from '/components';

//TODO: Add SXProps support here
interface KnownListProps extends BaseProps, SpaceProps, LayoutProps, TypographyProps {}

type ListStyleType = any; //CSS.ListStyleTypeProperty;

export interface ListProps
  extends KnownListProps,
    Omit<React.HTMLProps<HTMLUListElement>, keyof KnownListProps> {
  styleType?: ListStyleType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spacing?: SpaceProps['marginBottom'];
}

const StyledList = styled.ul<{listStyleType: ListStyleType;}>(
  (props) => `list-style-type: ${props.listStyleType};`,
  {
    listStylePosition: 'inside',
  },
  space,
  layout,
  typography,
);

export const List: React.FC<ListProps> = ({
  as = 'ul',
  styleType = 'none',
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
List.displayName = 'List';

const StyledListItem = styled.li(space);

export interface ListItemProps extends BaseProps, SpaceProps, Omit<React.HTMLProps<HTMLLIElement>, keyof BaseProps> {
  variant?: 'check' | 'cross';
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
      { variant === 'check' && <ListIcon name="Check" color="success" /> }
      { variant === 'cross' && <ListIcon name="Close" color="danger" /> }
      { children }
    </StyledListItem>
  );
};
ListItem.displayName =  'ListItem';


interface ListIconProps extends IconProps {
  role?: string;
}

export const ListIcon: React.FC<ListIconProps> = (props: ListIconProps) => (
  <Icon
    display="inline-block"
    role="presentation"
    mr={2}
    size="1em"
    verticalAlign="text-bottom"
    {...props}
  />
);