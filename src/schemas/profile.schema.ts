import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
    userId:  { type: String, required: true },
    rating:  { type: Number, default: 0 },
    reputation: { type: String, required: false },
    online:  { type: Boolean, default: false },
    comments:  [{ type: String, required: false }],
    verified: { type: Boolean, default:false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})