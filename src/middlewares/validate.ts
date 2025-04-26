import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction): void => {
  const { error } = schema.validate(req.body);
  if (error) {
    next(error); // Pass Joi validation error to centralized error handler
  } else {
    next();
  }
};

export default validate;
