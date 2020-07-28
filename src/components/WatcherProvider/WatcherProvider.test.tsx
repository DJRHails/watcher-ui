import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { WatcherProvider } from './WatcherProvider';

describe('WatcherProvider component sanity', () => {
  it('has name', () => {
    expect(WatcherProvider.displayName).toBe('WatcherProvider');
  });

  it('matches default snapshot', () => {
    const component = render(<WatcherProvider />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <WatcherProvider />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});