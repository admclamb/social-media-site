import mongoose from "mongoose";
import { Schema } from "mongoose";
const LikeSchema = new mongoose.Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    unique: [true, "A like can only have one post"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: [true, "A like can only have one user"],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export const Like = mongoose.model("Like", LikeSchema);
