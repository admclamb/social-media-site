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
