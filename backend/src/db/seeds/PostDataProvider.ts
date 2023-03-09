import mongoose from "mongoose";
import { DatabaseConfig } from "../../Config";
import { Post } from "../models/PostModel";
import { User } from "../models/UserModel";
import { Seeder } from "./Seeder";
export class PostDataProvider {
  public static seed(): void {
    const seeder = new Seeder(`src/db/seeds/PostData.json`, Post);
    seeder.inject();
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
  PostDataProvider.bindUserIds();
} else if (process.argv[2] === "--delete") {
  PostDataProvider.delete();
} else if (process.argv[2] === "--import") {
  PostDataProvider.seed();
}
