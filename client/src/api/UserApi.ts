import { User } from '@/ts/types/User';
import { Profile } from '@/ts/types/Profile';
import { Api } from './Api';

export class UserApi implements Api {
  static headers = new Headers().append('Content-Type', 'application/json');

  public static async create(user: User, profile: Profile) {
    const route = '/users';
    const options = {
      method: 'POST',
      body: JSON.stringify({ data: { ...user, ...profile } }),
      headers: UserApi.headers,
    };
    return await this.fetchJSON;
  }
}
