import { Document } from 'mongoose';

export class PostDTO {
  readonly title: String;
  readonly description?: String;
  readonly userId: String;
  readonly carId: String;
  readonly price:Number;
  readonly paymentPeriod:String;
  readonly insuredAmount?:Number;
  readonly created_at: Date;
  readonly update_at: Date;
}

export interface Post extends Document {
    readonly title: string;
  readonly description?: string;
  readonly username: string;
  readonly userId: string;
  readonly carId: string;
  readonly created_at: Date;
  readonly update_at: Date;
}
