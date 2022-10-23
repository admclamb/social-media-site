import express from 'express';

import { errorHandler } from './errors/errorHandler';
import { notFound } from './errors/notFound';
import { userRouter } from './user/user.router';
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/users', userRouter);
app.use(notFound);
app.use(errorHandler);
