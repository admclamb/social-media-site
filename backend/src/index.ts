const { PORT = "5000" } = process.env;
import { App } from "./App";
const knex = require("./db/connection");
const app = new App();
app.config();

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}

knex.migrate
  .latests()
  .then((migrations) => {
    console.log("🚀📦migrations📦🚀", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.log("💣🤔SOMETHING WENT WRONG🤔💣");
    console.error(error);
    knex.destroy();
  });
