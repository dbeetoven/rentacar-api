import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
  carBrand: String,
  carModel: String,
  color: String,
  images: [String],
  year: String,
  patent: String,
  insurranceType: String,
  hasGnc: Boolean,
  hasRented: Boolean,
  ownerId: String,
  renterId: String,
  km: Number,
  observation: String,
  created_at: { type: Date, default: Date.now },
  lastUpdate_at: { type: Date, default: Date.now },
});
