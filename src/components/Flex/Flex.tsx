import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '/components';
import { FlexboxProps } from 'styled-system';

export interface FlexProps extends BoxProps {
  direction?: FlexboxProps['flexDirection'];
  wrap?: FlexboxProps['flexWrap'];
  grow?: FlexboxProps['flexGrow'];
  align?: FlexboxProps['alignItems'];
  justify?: FlexboxProps['justifyContent'];
} 

const StyledFlex = styled(Box)(
  {
    display: 'flex',
  }
);

export const Flex: FC<FlexProps> = React.forwardRef(({
  direction,
  flexDirection = direction,
  wrap,
  flexWrap = wrap,
  align = flexDirection === 'column' ? 'baseline' : 'center',
  alignItems = align,
  justify,
  justifyContent = justify,
  grow,
  flexGrow = grow,
  ...rest
}: FlexProps, ref) => (
  <StyledFlex
    ref={ref}
    flexDirection={flexDirection}
    flexWrap={flexWrap}
    flexGrow={flexGrow}
    alignItems={alignItems}
    justifyContent={justifyContent}
    {...rest}
  />
));
Flex.displayName='Flex';
