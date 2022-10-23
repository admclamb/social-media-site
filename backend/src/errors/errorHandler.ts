import { Request, Response, NextFunction } from 'express';
/**
 * Express API error handler.
 */

interface Error {
  status: number;
  message: string;
}

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { status = 500, message = 'Something went wrong!' } = error;
  response.status(status).json({ error: message });
}
