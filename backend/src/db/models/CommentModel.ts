import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const CommentSchema = new mongoose.Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'A Comment requires an author'],
    },
    comment: {
      type: String,
      required: [true, 'A Comment requires a comment'],
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = mongoose.model('Comment', CommentSchema);
