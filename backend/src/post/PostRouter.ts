import * as express from 'express';
import { ErrorHandler } from '../errors/ErrorHandler';
import { PostController } from './PostController';

const router = express.Router();

router
  .route('/')
  .get(PostController.list)
  .post(PostController.create)
  .put(PostController.update)
  .delete(PostController.destroy)
  .all(ErrorHandler.methodNotAllowed);

router
  .route('/:_id')
  .get(PostController.read)
  .all(ErrorHandler.methodNotAllowed);

export const postRouter = router;
