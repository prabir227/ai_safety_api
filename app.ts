import express, { Application } from 'express';
import morgan from 'morgan';
import incidentRoutes from './src/routes/incidentRoutes';
import errorHandler from './src/middlewares/errorHandler';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/incidents', incidentRoutes);

// Error handler
app.use(errorHandler);

export default app;
