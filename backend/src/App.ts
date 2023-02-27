import express, { Application } from 'express';
import { userRouter } from './user/UserRouter';
import { postRouter } from './post/PostRouter';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as path from 'path';
import { ErrorHandler } from './errors/ErrorHandler';
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { FRONT_END_URL = 'http://localhost:3000' } = process.env;
export class App {
  instance: Application;

  constructor() {
    this.instance = express();
  }

  private setRoutes() {
    this.instance.use('/users', userRouter);
    this.instance.use('/posts', postRouter);
  }

  public config() {
    if (!FRONT_END_URL) {
      throw new Error('No front end URL was provided for cors options.');
    }

    const corsOptions = {
      origin: FRONT_END_URL,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      credentials: true,
      optionsSuccessStatus: 204,
    };
    this.instance.use(cookieParser());
    this.instance.use(cors(corsOptions));
    this.instance.use(express.json());
    this.setRoutes();
    this.instance.use(ErrorHandler.notFound);
    this.instance.use(ErrorHandler.errorHandler);
  }

  public listen(PORT: string, listener: any) {
    this.instance.listen(PORT, listener);
  }
}
