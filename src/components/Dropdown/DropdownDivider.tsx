import { css } from '@styled-system/css';
import styled from 'styled-components';

export interface DropdownDividerProps {}

export const DropdownDivider = styled('hr')(
  css({
    border: 0,
    borderBottom: '1px solid',
    borderColor: 'hover',
    my: '0.5rem',
    opacity: 0.6,
  })
);

DropdownDivider.displayName = 'DropdownDivider';
