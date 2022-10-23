import { asyncErrorBoundary } from '../errors/asyncErrorBoundary';
import { Request, Response, NextFunction } from 'express';
import { service } from './user.service';
import bcrypt from 'bcryptjs';
import { hasValidProperties } from '../utils/hasValidProperties';
import { User } from './User';
import { userAuth } from '../auth/UserAuth';
const { SALT = '5' } = process.env;

const VALID_PROPERTIES = ['username', 'email', 'password'];

async function emailExist(req: Request, res: Response, next: NextFunction) {
  console.log(req.body.data);
  const { email = '' } = req.body.data;
  const foundEmail = await service.readByEmail(email);
  if (foundEmail) {
    return next({
      status: 400,
      message: 'Email is already in use.',
    });
  }
  next();
}

async function usernameExist(req: Request, res: Response, next: NextFunction) {
  const { username = '' } = req.body.data;
  const foundUsername = await service.read(username);
  if (foundUsername) {
    return next({
      status: 400,
      message: 'Username is already in use.',
    });
  }
  next();
}

async function encryptPassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password = '' } = req.body.data;
  if (!password) {
    return next({
      status: 400,
      message: 'A password is requried',
    });
  }
  let saltError;
  const hashedPassword = await bcrypt
    .hash(password, parseInt(SALT))
    .catch(saltError);
  if (!hashedPassword || saltError) {
    return next({
      status: 500,
      message: 'Error creating password.',
    });
  }
  res.locals.hashedPassword = hashedPassword;
  next();
}

async function create(req: Request, res: Response, next: NextFunction) {
  const { username, email } = req.body.data;
  const { hashedPassword: password } = res.locals;
  const createdUser = await service.create({ username, email, password });
  if (!createdUser) {
    return next({
      status: 500,
      message: 'Error creating user.',
    });
  }
  res.locals.user = createdUser;
  next();
}

async function createToken(req: Request, res: Response, next: NextFunction) {
  const { user } = res.locals;
  const { user_id } = user;
  const accessToken = await userAuth.generateAccessToken(user_id);
  const refreshToken = await userAuth.generateRefreshToken(user_id);
  console.log('AT: ', accessToken, 'RT: ', refreshToken);
  res.locals.accessToken = accessToken;
  res.locals.refreshToken = refreshToken;
  next();
}

function formatResponse(req: Request, res: Response, next: NextFunction) {
  const { username, email } = res.locals.user;
  const { accessToken, refreshToken } = res.locals;
  console.log(username, email, accessToken, refreshToken);
  if (!accessToken || !refreshToken) {
    return next({
      status: 500,
      message: 'Error creating tokens',
    });
  }
  return res
    .cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })
    .status(200)
    .json({
      data: { username, email, refreshToken },
    });
}

async function read(req: Request, res: Response, next: NextFunction) {
  const user = await service.read(req.body.data.username);
  const { username, password } = user;
  if (!user) {
    return next({
      status: 404,
      message: 'User not found',
    });
  }
  res.status(200).json({ data: { username, password } });
}

function authTokens(req: Request, res: Response, next: NextFunction) {
  const { access_token } = req.cookies;
  const { refreshToken } = req.body.data;
  if (access_token) {
    const data = userAuth.authorize(access_token);
  }
}

function login(req: Request, res: Response, next: NextFunction) {}

export const controller = {
  read: [asyncErrorBoundary(read)],
  create: [
    hasValidProperties(VALID_PROPERTIES),
    asyncErrorBoundary(emailExist),
    asyncErrorBoundary(usernameExist),
    asyncErrorBoundary(encryptPassword),
    asyncErrorBoundary(create),
    asyncErrorBoundary(createToken),
    formatResponse,
  ],
  destroy: [],
  login: [],
  loginToken: [authTokens, login, asyncErrorBoundary(createToken)],
  logout: [],
};
