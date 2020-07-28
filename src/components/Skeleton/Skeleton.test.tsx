import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Skeleton } from './Skeleton';

describe('Skeleton component sanity', () => {
  it('has name', () => {
    expect(Skeleton.displayName).toBe('Skeleton');
  });

  it('matches default snapshot', () => {
    const component = render(<Skeleton />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Skeleton />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});