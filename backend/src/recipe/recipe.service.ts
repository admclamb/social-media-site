import { knex } from '../db/connection';

export class RecipeService {
  static TABLE: string = 'recipes';

  public static list() {
    return knex(this.TABLE).select('*');
  }

  public static read(recipe_id: string) {
    return knex(this.TABLE).select('*').where({ recipe_id }).first();
  }
}
