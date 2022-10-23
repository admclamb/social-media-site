const { PORT = 5000 } = process.env;
import { app } from './App';
import { knex } from './db/connection';

knex.migrate
  .latest()
  .then((migrations: any) => {
    console.log('migrations', migrations);
    app.listen(PORT, listener);
  })
  .catch((error: any) => {
    console.error(error);
    knex.destroy();
  });

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}
