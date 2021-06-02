import * as React from 'react';

import { ThemeProvider as ThemeUiProvider } from 'theme-ui';

const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeUiProvider theme={{}}>{children}</ThemeUiProvider>;
};

export default ThemeProvider;
