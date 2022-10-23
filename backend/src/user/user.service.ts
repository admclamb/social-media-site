import { knex } from '../db/connection';
import { User } from '../ts/interfaces/userInterface';

class UserService {
  userTable: string = 'users';

  read(username: string): User {
    return knex(this.userTable).select('*').where({ username }).first();
  }
  readByEmail(email: string): User {
    return knex(this.userTable).select('*').where({ email }).first();
  }

  create(user: User) {
    return knex(this.userTable)
      .insert(user)
      .returning('*')
      .then((users: any) => users[0]);
  }
}

export const service = new UserService();
