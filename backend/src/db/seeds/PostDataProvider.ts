import * as POST_DATA from './PostData.json';
import { Seeder } from './Seeder';
export class PostDataProvider {
  private static data = POST_DATA;

  public static seed(): void {
    const seeder = new Seeder(this.data);
    seeder.inject();
  }
}
