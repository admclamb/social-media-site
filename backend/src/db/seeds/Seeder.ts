import mongoose from "mongoose";
import fs from "fs";
import { DatabaseConfig } from "../../Config";
import { User } from "../models/UserModel";

export class Seeder {
  private file: string;
  private model;
  constructor(file: string, model) {
    this.file = file;
    this.model = model;
  }

  private connect(): void {
    const URI = DatabaseConfig.getDatabaseUri();
    mongoose
      .connect(URI)
      .then((con) => console.log("DB connection successful!", con.connection))
      .catch((err) => console.log("OH NO SOMETHING WENT WRONG ", err));
  }

  public async inject(): Promise<void> {
    try {
      this.connect();
      const data = JSON.parse(fs.readFileSync(this.file, "utf-8"));
      await this.model.create(data);
      console.log("Data successfully injected!");
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }

  public async injectPosts(postInformation: {}): Promise<void> {
    try {
      this.connect();
      const userIds = await User.find({}, "_id");
      const posts = postInformation.posts;
      const comments = postInformation.comments;
      if (!Array.isArray(userIds)) {
        throw new Error("UserIds is not of type array.");
      }
      if (!Array.isArray(posts)) {
        throw new Error("Posts is not of type array.");
      }
      const mappedPosts = posts.map(
        (post) => (post.author = userIds[post.author])
      );
      const createdPosts = await this.model.create(mappedPosts);
      console.log("CREATED POSTS: ", createdPosts);
      const mappedComments = comments.map((comment) => comment);
      console.log("Data successfully injected!");
    } catch (error) {
      console.error("ERROR: ", error.message);
    }
  }

  public async injectUserIds(userIds: []): Promise<void> {
    try {
      if (!Array.isArray(userIds)) {
        throw new Error("UserIds is not an array.");
      }
      this.connect();
      const data = JSON.parse(fs.readFileSync(this.file, "utf-8"));
      userIds.forEach((id, index) => (data[index].author = id));
      await this.model.create(data);
      console.log("Data successfully injected!");
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }

  public async delete(): Promise<void> {
    try {
      this.connect();
      await this.model.deleteMany();
      console.log("Data successfully deleted!");
    } catch (error) {
      console.error(error);
    }
  }
}
