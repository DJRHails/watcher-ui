import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { List } from './List';

describe('List component sanity', () => {
  it('has name', () => {
    expect(List.displayName).toBe('List');
  });

  it('matches default snapshot', () => {
    const component = render(<List />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <List />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});