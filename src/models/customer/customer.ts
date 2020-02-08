import { Document } from 'mongoose';

export class CustomerDTO {
  readonly firstName: String;
  readonly lastNname: String;
  readonly username: String;
  readonly email: String;
  readonly phone: String;
  readonly photo:String;
  readonly birthday: String;
  readonly docType: String;
  readonly docNumber: Number;
  readonly address: String;
  readonly biografy:String;
  readonly created_at: Date;
  readonly lastUpdate_at: Date;
}

export interface Customer extends Document {
    readonly lastname: string;
    readonly username: string;
    readonly email: string;
    readonly phone: string;
    readonly birthday: string;
    readonly docType: string;
    readonly docNumber: number;
    readonly address: string;
    readonly biografy:string
    readonly created_at: Date;
    readonly lastUpdate_at: Date;
}
