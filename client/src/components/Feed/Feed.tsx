import React, { useEffect, useState } from "react";
import FeedNav from "./FeedNav/FeedNav";
import { Post } from "@/ts/types/Post";
import { PostApi } from "@/api/PostApi";
import ErrorToast from "@/errors/ErrorToast";
import PostCard from "../Post/PostCard/PostCard";
type Props = {};

const Feed = (props: Props) => {
  const [query, setQuery] = useState("relevant");
  const [posts, setPosts] = useState<Post[]>([]);
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
        setPosts(response);
      } catch (error) {
        setError({ message: error.message });
      }
    })();
    return () => {
      return abortController.abort();
    };
  }, [query]);
  console.log(posts);
  return (
    <>
      <ErrorToast error={error} setError={setError} />
      <FeedNav query={query} setQuery={setQuery} />
      {posts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </>
  );
};

export default Feed;
