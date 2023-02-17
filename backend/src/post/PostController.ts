import { Request, Response, NextFunction } from 'express';

import { ErrorHandler } from '../errors/ErrorHandler';
import { User } from '../db/models/UserModel';

export class PostController {
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await User.find();
      res.status(200).json({ data: response });
    } catch (error) {
      return next({ status: 500, message: error.message });
    }
  }

  public static create(req: Request, res: Response, next: NextFunction) {}

  public static read(req: Request, res: Response, next: NextFunction) {}

  public static update(req: Request, res: Response, next: NextFunction) {}

  public static delete(req: Request, res: Response, next: NextFunction) {}
}
