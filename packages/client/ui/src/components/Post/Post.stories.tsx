import * as React from 'react';

import type { Meta, Story } from '@storybook/react';

import Post from './Post';

const meta: Meta = {
  title: 'Post',
  component: Post,
};

export default meta;

const Template: Story<any> = (args) => <Post {...args} />;

export const Example = Template.bind({});
Example.args = {
  content: 'Some content here.',
};
