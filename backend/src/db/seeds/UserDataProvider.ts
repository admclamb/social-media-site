import { User } from '../models/UserModel';
import { Seeder } from './Seeder';
export class UserDataProvider {
  public static seed(): void {
    const seeder = new Seeder(`${__dirname}/UserData.json`, User);
    seeder.inject();
  }

  public static delete(): void {
    const seeder = new Seeder(`${__dirname}/UserData.json`, User);
    seeder.delete();
  }
}

if (process.argv[2] === '--import') {
  UserDataProvider.seed();
} else if (process.argv[2] === '--delete') {
  UserDataProvider.delete();
}
