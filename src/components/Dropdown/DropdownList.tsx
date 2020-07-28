import { Box } from '../Box';
import React, { Ref } from 'react';
import { useDropdownList, UseDropdownListProps } from './useDropdownList';
import { mergeRefs } from '/utils';

export interface DropdownListProps extends UseDropdownListProps {
  
}

export const DropdownList = React.forwardRef((
  props: DropdownListProps,
  ref: Ref<any>,
) => {
  const menulist = useDropdownList(props);
  return (
    <Box
      {...menulist as any}
      ref={mergeRefs(menulist.ref, ref)}
      sx={{
        outline: 0,
        boxShadow: 'md',
        color: 'inherit',
        minWidth: '56',
        py: 2,
        zIndex: 1,
        bg: 'background',
        borderRadius: 'md',
        borderWidth: '1px',
        borderColor: 'hover',
        ...menulist.style
      }}
    />
  );
});

DropdownList.displayName = 'DropdownList';