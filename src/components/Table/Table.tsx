import React from 'react';
import { css } from '@styled-system/css';
import { Box, BoxProps } from '../Box';
import styled from 'styled-components';
import { shadow, BorderProps, TypographyProps, LayoutProps, ShadowProps } from 'styled-system';

export interface TableKnownProps extends BoxProps, BorderProps, TypographyProps, LayoutProps, ShadowProps {}

export interface TableProps 
  extends TableKnownProps,
  Omit<React.HTMLProps<HTMLTableElement>, keyof TableKnownProps> {
  scrollX?: true;
}

// https://github.com/styled-system/styled-system/issues/464
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledTable = styled(Box)<any>(
  css({
    '&': {
      borderCollapse: 'collapse',
      fontFamily: 'body',
      color: 'text',
      fontSize: 1,
    },
    'th, td': {
      border: 'solid',
      borderWidth: '1px 0',
      borderColor: 'muted',
      textAlign: 'left',
      px: 3,
      fontWeight: 'light',
    },
    'tbody tr': {
      height: '12'
    },
    'thead tr, tfoot tr': {
      height: '16',
    },
    'thead th': {
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  }),
  shadow,
);

export const Table: React.FC<TableProps> = ({scrollX, ...rest}: TableProps) => {
  const styledTable = (
    <StyledTable
      width="full"
      p={2}
      border={1}
      borderColor="muted"
      borderStyle="solid"
      fontSize={2}
      fontWeight="medium"
      fontFamily="body"
      boxShadow="sm"
      {...rest}
      as="table" />
  );
  return scrollX ? (
    <Box width={rest.width || 'full'} sx={{
      overflowX: 'auto',
    }}>
      {styledTable}
    </Box>
  ) : styledTable;
};
Table.displayName = 'Table';
