import * as express from 'express';
const router = express.Router();
import { controller } from './Problem.controller';
import { methodNotAllowed } from '../errors/methodNotAllowed';

router.route('/:problem');

export const userRouter = router;
