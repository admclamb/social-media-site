/**
 * Express API "Not found" handler.
 */
import { Request, Response, NextFunction } from 'express';
export function notFound(req: Request, res: Response, next: NextFunction) {
  next({ status: 404, message: `Path not found: ${req.originalUrl}` });
}
