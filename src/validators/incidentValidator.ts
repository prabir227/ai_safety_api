import Joi, { ObjectSchema } from 'joi';

export const incidentSchema: ObjectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  severity: Joi.string().valid('Low', 'Medium', 'High').required(),
  reported_at: Joi.date().optional()
});
