import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../themes/theme';

import { Jazzicon } from './Jazzicon';
import jazzicon from 'jazzicon';
jest.mock('jazzicon');

describe('Jazzicon component sanity', () => {
  it('has name', () => {
    expect(Jazzicon.displayName).toBe('Jazzicon');
  });

  it('matches default snapshot', () => {
    jazzicon.mockReturnValue(document.createElement('svg'));
    const component = render(<Jazzicon seed={0}/>);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    jazzicon.mockReturnValue(document.createElement('svg'));
    const component = render(
      <ThemeProvider theme={theme}>
        <Jazzicon seed={0} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});