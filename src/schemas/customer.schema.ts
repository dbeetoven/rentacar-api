import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    firstName: String,
    lastNname: String,
    username:String,
    email: String,
    phone: String,
    docType:String,
    docNumber:Number,
    address: String,
    description: String,
    created_at: { type: Date, default: Date.now },
    lastUpdate_at: { type: Date, default: Date.now }
})