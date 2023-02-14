import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import bcrypt from 'bcryptjs';
import { hasValidProperties } from '../utils/hasValidProperties';
import { User } from './User';
import { userAuth } from '../auth/UserAuth';
import { ErrorHandler } from '../errors/ErrorHandler';
const { SALT = '5' } = process.env;

export class UserController {
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UserService.list();
      res.status(200).json({ data });
    } catch (error) {
      return next({
        status: 500,
        message: error.message,
      });
    }
  }
}
