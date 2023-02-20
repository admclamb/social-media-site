import { sign, verify } from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

class UserAuth {
  TOKEN_KEY: string | null = process.env.TOKEN_KEY || null;
  ACCESS_TOKEN_TIMEOUT: string = '1h';
  REFRESH_TOKEN_TIMEOUT: string = '10d';
  public authorize(token: string) {
    if (!this.TOKEN_KEY) {
      throw 'Key is missing';
    }
    try {
      const data = verify(token, this.TOKEN_KEY);
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
      if (!this.TOKEN_KEY) {
        throw new Error('Key is missing');
      }
      return sign(
        {
          data: user_id,
        },
        this.TOKEN_KEY,
        { expiresIn }
      );
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async generateAccessToken(user_id: ObjectId): Promise<string> {
    return await this.generateToken(user_id, this.ACCESS_TOKEN_TIMEOUT);
  }

  public async generateRefreshToken(user_id: ObjectId): Promise<string> {
    return await this.generateToken(user_id, this.REFRESH_TOKEN_TIMEOUT);
  }
}

export const userAuth = new UserAuth();
