import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  carId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: false,
  },
  comments: [{
    type: mongoose.SchemaTypes.ObjectId,
    required: false,
  }],
  complete: {type:Boolean,default:false},
  timeOut: {type:Boolean,default:false},
  deleted: {type:Boolean,default:false},
  dislike:{type:Number,default:0},
  likes:{type:Number,default:0},
  price: { type: Number, required: true },
  paymentPeriod: {type:String, required:true},
  insuredAmount: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
