import * as React from 'react';

import { composeStories } from '@storybook/testing-react';

import { render, screen } from '../../testUtils';

import * as stories from './Post.stories';

const { Example } = composeStories(stories);

test('testing post content', () => {
  render(<Example />);

  expect(screen.getByText(Example.args?.content)).toBeInTheDocument();
});
