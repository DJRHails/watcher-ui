import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '/themes/theme';

import { Identicon } from './Identicon';
import { Jazzicon } from './Jazzicon';
import { mocked } from 'ts-jest/utils';
jest.mock('./Jazzicon');

describe('Identicon component sanity', () => {
  it('has name', () => {
    expect(Identicon.displayName).toBe('Identicon');
  });

  it('matches default snapshot', () => {
    mocked(Jazzicon, true).mockReturnValue(<i role="jazzicon"></i>);
    const component = render(<Identicon address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE"/>);
    expect(component).toMatchSnapshot();
  });

  it('matches themed snapshot', () => {
    mocked(Jazzicon, true).mockReturnValue(<i role="jazzicon"></i>);
    const component = render(
      <ThemeProvider theme={theme}>
        <Identicon address="0x67C3fD74fd36456FC5b339Fd09Efa330ad3126eE"/>
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});