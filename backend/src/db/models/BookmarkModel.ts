import mongoose from "mongoose";
import { Schema } from "mongoose";
const BookmarkSchema = new mongoose.Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    unique: [true, "A bookmark can only have one post"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: [true, "A bookmark can only have one user"],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export const Like = mongoose.model("Like", BookmarkSchema);
