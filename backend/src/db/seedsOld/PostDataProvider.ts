import mongoose from "mongoose";
import { DatabaseConfig } from "../../Config";
import { Post } from "../models/PostModel";
import { User } from "../models/UserModel";
import { Seeder } from "./Seeder";
import fs from "fs";
export class PostDataProvider {
  private static readData<T>(path: string): T {
    return JSON.parse(fs.readFileSync(path, "utf-8"));
  }

  public static seed(): void {
    try {
    } catch (error) {}
    const seeder = new Seeder(`src/db/seeds/PostData.json`, Post);
    const postData = PostDataProvider.readData("src/db/seeds/PostData.json");
    const userData = PostDataProvider.readData("src/db/seeds/UserData.json");
    const commentData = PostDataProvider.readData(
      "src/db/seeds/CommentsData.json"
    );
    if (!postData) {
      throw new Error("Cannot read post data");
    }
    if (!userData) {
      throw new Error("Cannot read user data");
    }
    if (!commentData) {
      throw new Error("Cannot read comment data");
    }
    seeder.injectPosts({
      posts: postData,
      users: userData,
      comments: commentData,
    });
  }

  public static delete(): void {
    const seeder = new Seeder(`src/db/seeds/PostData.json`, Post);
    seeder.delete();
  }

  public static async bindUserIds(): Promise<void> {
    try {
      const seeder = new Seeder(`src/db/seeds/PostData.json`, Post);
      const URI = DatabaseConfig.getDatabaseUri();
      mongoose
        .connect(URI)
        .then((con) =>
          console.log("DB connection successful!", con.connection)
        );
      const userIds = await User.find({}, "_id");
      console.log("USER IDS: ", userIds);
      seeder.injectUserIds(userIds);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }
}

if (process.argv[2] === "--import" && process.argv[3] === "--ids") {
  PostDataProvider.seed();
} else if (process.argv[2] === "--delete") {
  PostDataProvider.delete();
} else if (process.argv[2] === "--import") {
  PostDataProvider.seed();
}
