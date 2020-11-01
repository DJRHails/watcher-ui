import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Spinner } from './Spinner';

describe('Spinner component sanity', () => {
  it('has name', () => {
    expect(Spinner.displayName).toBe('Spinner');
  });

  it('matches default snapshot', () => {
    const component = render(<Spinner />);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});