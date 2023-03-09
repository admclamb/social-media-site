import mongoose from "mongoose";
import { Schema } from "mongoose";
const PostSchema = new mongoose.Schema(
  {
    title: {
      required: [true, "A Post requires a title"],
      type: String,
    },
    slug: {
      required: [true, "A Post requires a slug"],
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "A Post requires an author"],
    },
    header_image_url: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: [true, "A Post requires a body"],
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: true,
      },
    ],
    likes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
          unique: [true, "A like needs to be unique"],
        },
      ],
    },
    unicorn_likes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
          unique: [true, "A Unicorn like needs to be unique"],
        },
      ],
    },
    bookmarks: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
          unique: [true, "A Bookmark needs to be unique"],
        },
      ],
    },
    tags: {
      type: [{ type: String }],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", PostSchema);
