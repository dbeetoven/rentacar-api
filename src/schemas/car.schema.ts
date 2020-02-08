import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  carBrand: { type: String, required: true },
  carModel: { type: String, required: true },
  color: { type: String, required: true },
  images: [String],
  year: { type: String, required: true },
  patent: { type: String, required: true },
  insurranceType: { type: String, required: true },
  hasGnc: Boolean,
  hasRented: Boolean,
  ownerId: {
    type: String,
    required: true,
  },
  renterId: {
    type: String,
    required: true,
  },
  km: { type: Number, required: true },
  observation: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
