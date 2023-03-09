import Avatar from "@/components/Avatar/Avatar";
import Card from "@/components/Card/Card";
import { Post } from "@/ts/types/Post";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import Button from "@/components/Button/Button";
import ButtonLightPrimary from "@/components/Button/ButtonLightPrimary/ButtonLightPrimary";
import Link from "next/link";
type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  console.log(post);
  const { author, createdAt, title, likes, comments, slug } = post;
  const createdDay = dayjs(createdAt);
  return (
    <Card>
      <header className="flex gap-3">
        <Avatar url="" />
        <div>
          <h6>Anthony Mclamb</h6>
          <p className="text-sm">{createdDay.format("MMM DD")}</p>
        </div>
      </header>
      <div className="ml-[3.75rem]">
        <h4 className="text-2xl font-semibold">
          <Link href={`/post/${slug}`} className="hover:text-indigo-800">
            {title}
          </Link>
        </h4>
      </div>
      <footer className="ml-[3rem] mt-4 flex gap-4">
        <ButtonLightPrimary href={`/post/${slug}`}>
          <FontAwesomeIcon icon={faHeart} size="lg" /> 10 likes
        </ButtonLightPrimary>
        <ButtonLightPrimary href={`/post/${slug}`}>
          <FontAwesomeIcon icon={faComment} size="lg" /> 5 Comments
        </ButtonLightPrimary>
        <ButtonLightPrimary className="ml-auto">
          <FontAwesomeIcon icon={faBookmark} size="lg" />
        </ButtonLightPrimary>
      </footer>
    </Card>
  );
};

export default PostCard;
