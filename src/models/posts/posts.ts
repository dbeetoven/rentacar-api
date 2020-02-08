import { Document } from 'mongoose';

export class PostDTO {
  readonly title: String;
  readonly description?: String;
  readonly userId: String;
  readonly carId: String;
  readonly price: Number;
  readonly paymentPeriod: String;
  readonly insuredAmount?: Number;
  readonly created_at: Date;
  readonly update_at: Date;
  readonly comments: [String];
  readonly complete: Boolean;
  readonly timeOut: Boolean;
  readonly deleted: Boolean;
  readonly dislike: Number;
  readonly likes: Number;
}

export interface Post extends Document {
  readonly title: string;
  readonly description?: string;
  readonly userId: string;
  readonly carId: string;
  readonly price: number;
  readonly paymentPeriod: string;
  readonly insuredAmount?: number;
  readonly created_at: Date;
  readonly update_at: Date;
  readonly comments: [string];
  readonly complete: boolean;
  readonly timeOut: boolean;
  readonly deleted: boolean;
  readonly dislike: number;
  readonly likes: number;
}
