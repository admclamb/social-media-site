import React from 'react';
import { Post as IPost } from '../../ts/interfaces/Post';
import Card from '../Card/Card';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';

type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  return (
    <Card>
      <PostHeader />
      <PostFooter />
    </Card>
  );
};

export default Post;
