import React, { useEffect, useState } from 'react';
import FeedNav from './FeedNav/FeedNav';
import { Post } from '@/ts/types/Post';
import { PostApi } from '@/api/PostApi';
import ErrorToast from '@/errors/ErrorToast';
type Props = {};

const Feed = (props: Props) => {
  const [query, setQuery] = useState('relevant');
  const [post, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setError(null);
        setPosts([]);
        const response = await PostApi.getInstance().list(
          query,
          abortController
        );
        console.log(response);
      } catch (error) {
        setError({ message: error.message });
      }
    })();
    return () => {
      return abortController.abort();
    };
  }, [query]);
  console.log('ERROR: ', error);
  return (
    <>
      <ErrorToast error={error} setError={setError} />
      <FeedNav query={query} setQuery={setQuery} />
    </>
  );
};

export default Feed;
