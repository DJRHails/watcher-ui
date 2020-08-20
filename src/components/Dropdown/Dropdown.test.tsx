import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Dropdown } from './Dropdown';
import { DropdownButton } from './DropdownButton';
import { DropdownList } from './DropdownList';
import { DropdownItem } from './DropdownItem';

const DefaultDropdown = () => (
  <Dropdown isLazy>
    <DropdownButton>
        Open dropdown
    </DropdownButton>
    <DropdownList>
      <DropdownItem>A word</DropdownItem>
    </DropdownList>
  </Dropdown>
);

describe('Dropdown component sanity', () => {
  it('has name', () => {
    expect(Dropdown.displayName).toBe('Dropdown');
  });

  // TODO(DJRHails): Fix as getting unknown update request
  // it('matches default snapshot', () => {
  //   const component = render(<DefaultDropdown />);
  //   expect(component).toMatchSnapshot();
  // });

  // it('matches themed snapshot', () => {
  //   const component = render(
  //     <ThemeProvider theme={theme}>
  //       <DefaultDropdown />
  //     </ThemeProvider>
  //   );
  //   expect(component).toMatchSnapshot();
  // });
});