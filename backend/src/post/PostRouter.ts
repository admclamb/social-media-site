import * as express from 'express';
import { ErrorHandler } from '../errors/ErrorHandler';
import { PostController } from './PostController';

export class PostRouter {
  public static routes() {
    const router = express.Router();
    router
      .route('/')
      .get(PostController.list)
      .all(ErrorHandler.methodNotAllowed);
    router
      .route('/:post_id')
      .get(PostController.read)
      .post(PostController.create)
      .put(PostController.update)
      .all(ErrorHandler.methodNotAllowed);
  }
}
