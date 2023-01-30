import React, { useEffect, useState } from 'react';
import FeedNav from './FeedNav/FeedNav';
import { Post } from '@/ts/types/Post';
type Props = {};

const Feed = (props: Props) => {
  const [query, setQuery] = useState('relevant');
  const [post, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setError(null);
    setPosts([]);
    const abortController = new AbortController();
    async () => {};
    return () => {
      return abortController.abort();
    };
  }, [query]);
  return (
    <>
      <FeedNav query={query} setQuery={setQuery} />
    </>
  );
};

export default Feed;
