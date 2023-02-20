import { User } from '@/ts/types/User';
import { Profile } from '@/ts/types/Profile';
import { api } from './AxiosInstance';

export class UserApi {
  private static baseURL: string =
    process.env.BACKEND_URL || 'http://localhost:5000';
  public static async create(user: User, profile: Profile) {
    const path = '/users';
    console.log('Base url:', this.baseURL);
    return api.post(path, {
      data: {
        ...user,
        ...profile,
      },
    });
  }

  public static async loginWithToken(refreshToken: string) {
    const path = '/users/login';
    return api.post(path, { data: refreshToken });
  }
}
