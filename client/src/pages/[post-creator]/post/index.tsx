import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const Post = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    console.log(slug);
    if (!slug) {
      router.push("/");
    }
  }, [slug]);

  return <div>Post</div>;
};

export default Post;
