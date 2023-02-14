import mongoose from 'mongoose';
import fs from 'fs';
import { DatabaseConfig } from '../../Config';
import { User } from '../models/UserModel';

export class Seeder {
  private file: string;
  private model;
  constructor(file: string, model) {
    this.file = file;
    this.model = model;
  }

  private connect(): void {
    mongoose
      .connect(DatabaseConfig.getDatabaseUri(), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(console.log('DB connection successful!'));
  }

  public async inject(): Promise<void> {
    try {
      this.connect();
      const data = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
      await this.model.create(data);
      console.log('Data successfully loaded!');
    } catch (error) {
      console.log(error);
    }
  }

  public async delete(): Promise<void> {
    try {
      this.connect();
      await this.model.deleteMany();
      console.log('Data successfully deleted!');
    } catch (error) {
      console.log(error);
    }
  }
}
