import mongoose, { Document, Schema } from 'mongoose';

export interface IIncident extends Document {
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const incidentSchema = new Schema<IIncident>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  reported_at: { type: Date, default: Date.now },
}, { timestamps: true });

const Incident = mongoose.model<IIncident>('Incident', incidentSchema);

export default Incident;
