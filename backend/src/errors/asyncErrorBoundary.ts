import { Request, Response, NextFunction } from 'express';

export function asyncErrorBoundary(delegate: any, defaultStatus = 500) {
  return (request: Request, response: Response, next: NextFunction) => {
    Promise.resolve()
      .then(() => delegate(request, response, next))
      .catch((error = {}) => {
        const { status = defaultStatus, message = error } = error;
        next({
          status,
          message,
        });
      });
  };
}
