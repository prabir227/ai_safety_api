import { Request, Response, NextFunction } from 'express';
import Incident from '../models/incidentModel';

export const createIncident = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const incident = await Incident.create(req.body);
    res.status(201).json(incident);
  } catch (error) {
    next(error);
  }
};

export const getAllIncidents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const incidents = await Incident.find().sort({ reported_at: -1 });
    res.status(200).json(incidents);
  } catch (error) {
    next(error);
  }
};

export const getIncidentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }
    res.status(200).json(incident);
  } catch (error) {
    next(error);
  }
};

export const deleteIncidentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (error) {
    next(error);
  }
};
