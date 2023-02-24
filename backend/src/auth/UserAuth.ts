import { sign, verify } from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

class UserAuth {
  private static TOKEN_KEY: string = process.env.TOKEN_KEY || '';
  private static ACCESS_TOKEN_TIMEOUT: string = '1h';
  private static REFRESH_TOKEN_TIMEOUT: string = '10d';

  private constructor() {}

  public authorize(token: string) {
    if (!UserAuth.TOKEN_KEY) {
      throw new Error('No Token Key has been provided.');
    }
    if (!UserAuth.ACCESS_TOKEN_TIMEOUT) {
      throw new Error('No Access Token timeout provided.');
    }
    if (!UserAuth.REFRESH_TOKEN_TIMEOUT) {
      throw new Error('No Refresh Token timeout provided.');
    }
    try {
      const data = verify(token, UserAuth.TOKEN_KEY);
      return data;
    } catch (error) {
      return error;
    }
  }

  private static async generateToken(
    user_id: ObjectId,
    expiresIn: string
  ): Promise<string> {
    try {
      if (!UserAuth.TOKEN_KEY) {
        throw new Error('Key is missing');
      }
      return sign(
        {
          data: user_id,
        },
        UserAuth.TOKEN_KEY,
        { expiresIn }
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public static async generateAccessToken(user_id: ObjectId): Promise<string> {
    return await this.generateToken(user_id, this.ACCESS_TOKEN_TIMEOUT);
  }

  public static async generateRefreshToken(user_id: ObjectId): Promise<string> {
    return await this.generateToken(user_id, this.REFRESH_TOKEN_TIMEOUT);
  }
}
