import { Document } from 'mongoose';

export class ProfileDTO {
  readonly userId: String;
  readonly rating: Number;
  readonly reputation: String;
  readonly online: Boolean;
  readonly verified: Boolean;
  readonly comments: [String];
  readonly created_at: Date;
  readonly lastUpdate_at: Date;
}

export interface Profile extends Document {
  readonly userId: string;
  readonly rating: number;
  readonly reputation: string;
  readonly online: boolean;
  readonly verified: boolean;
  readonly comments: [string];
  readonly created_at: Date;
  readonly lastUpdate_at: Date;
}
