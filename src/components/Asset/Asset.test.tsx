import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Asset } from './Asset';

describe('Asset component sanity', () => {
  it('has name', () => {
    expect(Asset.displayName).toBe('Asset');
  });

  it('matches default snapshot', () => {
    const component = render(<Asset name="Ethereum" ticker="ETH" />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Asset name="Ethereum" ticker="ETH" />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});