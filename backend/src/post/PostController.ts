import { Request, Response, NextFunction } from 'express';

import { ErrorHandler } from '../errors/ErrorHandler';
import { Post } from '../db/models/PostModel';
import { DataValidator } from '../utils/DataValidator';
import { DatabaseErrorHandler } from '../errors/DatabaseErrorHandler';

export class PostController {
  private static validProperties = [
    'title',
    'author',
    'header_image_url',
    'body',
    'comments',
    'likes',
    'unicorn_likes',
    'bookmarks',
    'tags',
  ];

  private static requiredProperties = ['title', 'author', 'body', 'comments'];

  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ data: await Post.find() });
    } catch (error) {
      return next({ status: 500, message: error.message });
    }
  }
  public static async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      const foundPost = await Post.findById(_id);
      if (foundPost) {
        res.status(200).json({ data: foundPost });
      }
      return next({ status: 404, message: 'Post not found.' });
    } catch (error) {
      return next({ status: 400, message: error.message });
    }
  }
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      DataValidator.hasValidProperties(PostController.validProperties, data);
      DataValidator.hasRequiredProperties(
        PostController.requiredProperties,
        data
      );
      const createdUser = await Post.create(data);
      res.status(200).json({ data: createdUser });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      DataValidator.hasValidProperties(PostController.validProperties, data);
      DataValidator.hasRequiredProperties(
        PostController.requiredProperties,
        data
      );
      const { _id = null } = data;
      if (!_id) {
        return next({
          status: 400,
          message: 'A Post id is required.',
        });
      }
      const filter = { _id };
      const updatedPost = await Post.findOneAndUpdate(filter, data, {
        new: true,
      });
      if (updatedPost) {
        return res.status(200).json({ data: updatedPost });
      }
      return next({ status: 400, message: 'Error updating post.' });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }

  public static async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.body.data;
      if (_id) {
        const deleted = await Post.findByIdAndDelete(_id);
        console.log(deleted);
        return res.sendStatus(204);
      }
      return next({
        status: 400,
        message: 'Post id not found.',
      });
    } catch (error) {
      console.log(error);
      return next(DatabaseErrorHandler.handleError(error));
    }
  }
}
