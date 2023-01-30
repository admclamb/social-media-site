import { Post } from '@/ts/types/Post';
import React, { useEffect, useState } from 'react';

type Props = {};

const FeaturedTags = (props: Props) => {
  const [tags, setTags] = useState<Post[]>([]);
  useEffect(() => {}, []);
  return <div>FeaturedTags</div>;
};

export default FeaturedTags;
