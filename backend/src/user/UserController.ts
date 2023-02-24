import { Request, Response, NextFunction } from 'express';
import { UserAuth } from '../auth/UserAuth';
import { User } from '../db/models/UserModel';
import { DatabaseErrorHandler } from '../errors/DatabaseErrorHandler';
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
    '_id',
    'password',
    'skills',
  ];

  private static requiredProperties = ['email', 'first_name', 'last_name'];

  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ data: await User.find() });
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
      console.log('DATA: ', data);
      DataValidator.hasValidProperties(UserController.validProperties, data);
      DataValidator.hasRequiredProperties(
        UserController.requiredProperties,
        data
      );
      const createdUser = await User.create(data);
      const accessToken = await userAuth.generateAccessToken(createdUser._id);
      const refreshToken = await userAuth.generateRefreshToken(createdUser._id);
      res
        .cookie('access_token', accessToken, {
          httpOnly: true,
          secure: false,
          expires: new Date(Date.now() + 8 * 3600000),
        })
        .status(200)
        .json({ data: createdUser, refreshToken });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      DataValidator.hasValidProperties(UserController.validProperties, data);
      DataValidator.hasRequiredProperties(
        UserController.requiredProperties,
        data
      );
      const { _id = null } = data;
      if (!_id) {
        return next({
          status: 400,
          message: 'A user id is required.',
        });
      }
      const filter = { _id };
      const updatedUser = await User.findOneAndUpdate(filter, data, {
        new: true,
      });
      if (updatedUser) {
        return res.status(200).json({ data: updatedUser });
      }
      return next({ status: 400, message: 'Error updating user.' });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }

  public static async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.body.data;
      if (_id) {
        const deleted = await User.findByIdAndDelete(_id);
        console.log(deleted);
        return res.sendStatus(204);
      }
      return next({
        status: 400,
        message: 'User id not found.',
      });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }

  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body.data;
      const foundAccount = await User.findOne({ email });
      if (foundAccount) {
        if (foundAccount.password === password) {
          const access_token = await UserAuth.generateAccessToken(
            foundAccount.user_id
          );
          const refresh_token = await userAuth.generateRefreshToken(
            foundAccount.user_id
          );
          return next();
        }
        return next({
          status: 400,
          message: 'User password is incorrect',
        });
      }
      return next({
        status: 404,
        message: 'User email not found.',
      });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }
}
