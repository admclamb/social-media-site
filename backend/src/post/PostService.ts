import { ObjectId } from "mongoose";
import { Post } from "../db/models/PostModel";
import { User } from "../db/models/UserModel";

export class PostService {
  private static schema = Post;
  private static userSchema = User;
  public static async list() {
    return await PostService.schema.find();
  }

  public static async listWithAuthor() {
    const post = PostService.schema;
    const user = PostService.userSchema;
    return post
      .find()
      .populate("author")
      .exec((err, post) => {
        if (err) throw new Error(err);
        console.log("POSTS: ", post);
        return post;
      });
  }

  public static async read(_id: ObjectId) {
    return await PostService.schema.findById(_id);
  }

  public static async create(post: any) {
    return await PostService.schema.create(post);
  }

  public static async update(filter: {}, data: any, config: {}) {
    return await PostService.schema.findOneAndUpdate(filter, data, config);
  }

  public static async destroy(_id: ObjectId) {
    return await PostService.schema.findByIdAndDelete(_id);
  }
}
