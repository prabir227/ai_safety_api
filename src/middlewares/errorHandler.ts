import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);

  res.status(err.status || 400).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
