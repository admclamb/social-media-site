import path from 'path';
import { knex } from '../src/db/connection';
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

knex.migrate
  .forceFreeMigrationsLock()
  .then(() => knex.migrate.rollback(null, true))
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run())
  .then(() => console.log('Dropped and seeded database'))
  .then(() => knex.destroy())
  .catch((error: any) =>
    console.error('Failed to drop and seed database', error)
  );
