import express, { Application } from 'express';

import { errorHandler } from './errors/errorHandler';
import { notFound } from './errors/notFound';
import { userRouter } from './user/user.router';
import cors from 'cors';
import * as path from 'path';
import { recipeRouter } from './recipe/recipe.router';
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

export class App {
  instance: Application;

  constructor() {
    this.instance = express();
  }

  private setRoutes() {
    this.instance.use('/recipes', recipeRouter);
    this.instance.use('/users', userRouter);
  }

  public config() {
    this.instance.use(cors());
    this.instance.use(express.json());
    this.setRoutes();
    this.instance.use(notFound);
    this.instance.use(errorHandler);
  }

  public listen(PORT: string, listener: any) {
    this.instance.listen(PORT, listener);
  }
}
