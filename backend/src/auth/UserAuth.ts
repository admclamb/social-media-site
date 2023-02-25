import { sign, verify } from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

export class UserAuth {
  private static instance: UserAuth;

  private tokenKey: string;
  private accessTokenTimeout: string;
  private refreshTokenTimeout: string;

  private constructor() {
    if (!process.env.TOKEN_KEY) {
      throw new Error('No Token Key has been provided.');
    }
    this.tokenKey = process.env.TOKEN_KEY || '';
    this.accessTokenTimeout = '1h';
    this.refreshTokenTimeout = '10d';
  }

  public static getInstance() {
    if (!UserAuth.instance) {
      UserAuth.instance = new UserAuth();
    }
    return UserAuth.instance;
  }

  public async authorize(token: string) {
    try {
      const data = verify(token, this.tokenKey);
      return data;
    } catch (error) {
      return error;
    }
  }

  private async generateToken(
    user_id: ObjectId,
    expiresIn: string
  ): Promise<string> {
    try {
      if (!this.tokenKey) {
        throw new Error('Key is missing');
      }
      return sign(
        {
          data: user_id,
        },
        this.tokenKey,
        { expiresIn }
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async generateAccessToken(user_id: ObjectId): Promise<string> {
    return await this.generateToken(user_id, this.accessTokenTimeout);
  }

  public async generateRefreshToken(user_id: ObjectId): Promise<string> {
    return await this.generateToken(user_id, this.refreshTokenTimeout);
  }
}
