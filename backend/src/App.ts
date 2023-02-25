import express, { Application } from 'express';
import { userRouter } from './user/UserRouter';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as path from 'path';
import { ErrorHandler } from './errors/ErrorHandler';
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

export class App {
  instance: Application;

  constructor() {
    this.instance = express();
  }

  private setRoutes() {
    this.instance.use('/users', userRouter);
  }

  public config() {
    this.instance.use(cookieParser());
    this.instance.use(cors());
    this.instance.use(express.json());
    this.setRoutes();
    this.instance.use(ErrorHandler.notFound);
    this.instance.use(ErrorHandler.errorHandler);
    console.log(this.instance._router.stack);
  }

  public listen(PORT: string, listener: any) {
    this.instance.listen(PORT, listener);
  }
}
