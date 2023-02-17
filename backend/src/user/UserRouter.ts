import * as express from 'express';
import { ErrorHandler } from '../errors/ErrorHandler';
import { UserController } from './UserController';

const router = express.Router();

router
  .route('/')
  .get(UserController.list)
  .post(UserController.create)
  .put(UserController.update)
  .delete(UserController.destroy)
  .all(ErrorHandler.methodNotAllowed);

router
  .route('/:_id')
  .get(UserController.read)
  .all(ErrorHandler.methodNotAllowed);

export const userRouter = router;
