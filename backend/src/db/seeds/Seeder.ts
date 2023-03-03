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
    const URI = DatabaseConfig.getDatabaseUri();
    mongoose
      .connect(URI)
      .then((con) => console.log('DB connection successful!', con.connection))
      .catch((err) => console.log('OH NO SOMETHING WENT WRONG ', err));
  }

  public async inject(): Promise<void> {
    try {
      this.connect();
      const data = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
      await this.model.create(data).catch(console.log);
      console.log('Data successfully loaded!');
    } catch (error) {
      console.log('ERROR: ', error);
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
