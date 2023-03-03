import { Post } from '../models/PostModel';
import { Seeder } from './Seeder';
export class PostDataProvider {
  public static seed(): void {
    const seeder = new Seeder(`${__dirname}/PostData.json`, Post);
    seeder.inject();
  }

  public static delete(): void {
    const seeder = new Seeder(`${__dirname}/PostData.json`, Post);
    seeder.delete();
  }
}

if (process.argv[2] === '--import') {
  PostDataProvider.seed();
} else if (process.argv[2] === '--delete') {
  PostDataProvider.delete();
}
