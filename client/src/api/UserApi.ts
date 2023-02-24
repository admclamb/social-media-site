import { User } from '@/ts/types/User';
import { Profile } from '@/ts/types/Profile';
import { Api } from './Api';

export class UserApi extends Api {
  private static instance: UserApi;

  private constructor() {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '';
    if (!baseUrl) {
      throw new Error('No base url has been provided');
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    super(baseUrl, headers);
  }

  public static getInstance(): UserApi {
    if (!UserApi.instance) {
      UserApi.instance = new UserApi();
    }
    console.log(UserApi.instance);
    return UserApi.instance;
  }

  public async create(user: User, profile: Profile) {
    const path = '/users';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        data: {
          ...user,
          ...profile,
        },
      }),
    };
    console.log(path, options);
    return this.fetchJson<{}>(path, options, {});
  }

  public async login(login: {}) {
    const path = '/users/login';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        data: {
          ...login,
        },
      }),
    };
    return this.fetchJson<{}>(path, options, {});
  }

  public async loginWithToken(refreshToken: string) {
    const path = '/users/login/token';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        data: {
          refreshToken,
        },
      }),
    };
    return this.fetchJson(path, options, {});
  }
}
