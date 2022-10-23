import * as express from 'express';
const router = express.Router();
import { controller } from './user.controller';
import { methodNotAllowed } from '../errors/methodNotAllowed';

router.route('/login/token').post(controller.loginToken).all(methodNotAllowed);
router.route('/login').post(controller.login).all(methodNotAllowed);
router.route('/logout').post(controller.logout).all(methodNotAllowed);
router
  .route('/')
  .post(controller.create)
  .delete(controller.destroy)
  .all(methodNotAllowed);

export const userRouter = router;
