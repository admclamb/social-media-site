import { Request, Response, NextFunction } from 'express';
import { User } from '../db/models/UserModel';
import { DataValidator } from '../utils/DataValidator';
const { SALT = '5' } = process.env;

export class UserController {
  private static validProperties = [
    'email',
    'first_name',
    'last_name',
    'about',
    'work',
    'avatar',
    'primary_color',
    'secondary_color',
  ];

  private static requiredProperties = ['email', 'first_name', 'last_name'];

  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await User.find();
      res.status(200).json({ data });
    } catch (error) {
      return next({
        status: 500,
        message: error.message,
      });
    }
  }

  public static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      const foundUser = await User.findById(_id);
      if (foundUser) {
        res.status(200).json({ data: foundUser });
      }
      return next({ status: 404, message: 'User not found.' });
    } catch (error) {
      return next({ status: 400, message: error.message });
    }
  }

  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      DataValidator.hasValidProperties(UserController.validProperties, data);
      DataValidator.hasRequiredProperties(
        UserController.requiredProperties,
        data
      );
      const createdUser = await User.create(data);
      res.status(200).json({ data: createdUser });
    } catch (error) {
      return next({ status: 400, message: error.message });
    }
  }
}
