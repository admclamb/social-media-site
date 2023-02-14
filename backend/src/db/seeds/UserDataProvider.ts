import USER_DATA from './UserData.json';
import { Seeder } from './Seeder';
export class UserDataProvider {
  private static data = USER_DATA;

  public static seed(): void {
    const seeder = new Seeder(this.data);
    seeder.inject();
  }
}
