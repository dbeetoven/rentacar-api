import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    firstName:  { type: String, required: true },
    lastNname:  { type: String, required: true },
    username: { type: String, required: false },
    email:  { type: String, required: true },
    phone:  { type: String, required: true },
    docType: { type: String, required: true },
    docNumber: { type: String, required: true },
    address:  { type: String, required: false },
    biografy: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})