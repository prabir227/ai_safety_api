import express from 'express';
import validate from '../middlewares/validate';
import { incidentSchema } from '../validators/incidentValidator';
import {
  createIncident,
  getAllIncidents,
  getIncidentById,
  deleteIncidentById
} from '../controllers/incidentController';

const router = express.Router();

router.get('/', getAllIncidents);
router.post('/', validate(incidentSchema), createIncident);
router.get('/:id', getIncidentById);
router.delete('/:id', deleteIncidentById);

export default router;
