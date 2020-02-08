
import { Document } from 'mongoose';

export class CarDTO {
    readonly carBrand: String;
    readonly carModel: String;
    readonly color: String;
    readonly images:[String];
    readonly year: String;
    readonly patent: String;
    readonly insurranceType: String;
    readonly hasGnc: Boolean;
    readonly hasRented:Boolean;
    readonly ownerId:String;
    readonly renterId:String;
    readonly km: Number;
    readonly observation: String;
    readonly created_at: Date;
    readonly lastUpdate_at: Date;
  }
  
  export interface Car extends Document {
    readonly carBrand: string;
    readonly carModel: string;
    readonly color: string;
    readonly year: string;
    readonly images:[string];
    readonly patent: string;
    readonly insurranceType: string;
    readonly hasGnc: boolean;
    readonly hasRented:boolean;
    readonly ownerId:string;
    readonly renterId:string;
    readonly km: string;
    readonly observation: string;
    readonly created_at: string;
    readonly lastUpdate_at: string
  }
  
  export interface Customer extends Document {
    readonly lastNname: string;
    readonly username: string;
    readonly email: string;
    readonly phone: string;
    readonly birthday: string;
    readonly docType: string;
    readonly docNumber: number;
    readonly address: string;
    readonly created_at: Date;
    readonly lastUpdate_at: Date;
}
