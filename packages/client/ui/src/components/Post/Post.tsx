import * as React from 'react';

import { Flex } from 'theme-ui';

const Post = ({ content }: { content: string }) => {
  return <Flex sx={{ margin: 3 }}>{content}</Flex>;
};

export default Post;
