import mongoose from 'mongoose';
import { DatabaseConfig } from '../../Config';

export class Seeder {
  private seed;
  constructor(seed) {
    this.seed = seed;
  }

  public inject(): void {
    mongoose
      .connect(DatabaseConfig.getDatabaseUri(), { useNewUrlParser: true })
      .catch((err) => {
        console.log(err.stack);
        process.exit(1);
      })
      .then(() => {
        console.log('Connected to db');
      });

    this.seed.map(async (item, index) => {
      await item.save((err, result) => {
        if (index === this.seed.length - 1) {
          console.log('DONE!');
          mongoose.disconnect();
        }
      });
    });
  }
}
