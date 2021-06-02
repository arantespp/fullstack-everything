import '@testing-library/jest-dom';
import { render, RenderOptions } from '@testing-library/react';

import ThemeProvider from './ThemeProvider/ThemeProvider';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ThemeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
