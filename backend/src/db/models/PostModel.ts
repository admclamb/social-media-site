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
    numberOfLikes: {
      type: Number,
      default: 0,
    },
    numberOfBookmarks: {
      type: Number,
      default: 0,
    },
    numberOfComments: {
      type: Number,
      default: 0,
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
