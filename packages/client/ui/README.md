# Fullstack Everything - UI

## Files

- [src/testUtils.tsx](src/testUtils.ts): used to handle global tests configuration, as providing the wrappers that will be used to all tests.

## Test

### Using Storybook Stories

This project is using Storybook stories to be used as the arranged component (first "A" of [AAA](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)). The library [@storybook/testing-react](https://github.com/storybookjs/testing-react#readme) provides methods to import components stories so that you write once and use twice. For example, the [Post spec](src/components/Post/Post.spec.tsx) file is:

```tsx
import * as React from 'react';

import { composeStories } from '@storybook/testing-react';

import { render, screen } from '../../testUtils';

import * as stories from './Post.stories';

const { Example } = composeStories(stories);

test('testing post content', () => {
  render(<Example />);

  expect(screen.getByText(Example.args?.content)).toBeInTheDocument();
});
```

To confirm that this test is not a false positive, change the assertion to

```tsx
expect(screen.getByText(Example.args?.content + 'a')).toBeInTheDocument();
```

and execute `yarn test`.
