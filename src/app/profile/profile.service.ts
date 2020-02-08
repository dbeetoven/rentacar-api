import { Injectable } from '@nestjs/common';
import { ProfileDTO, Profile, AbstractService } from 'src/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService implements AbstractService<ProfileDTO,Profile> {
    constructor(@InjectModel('Profile') private readonly profileModel:Model<Profile>){
    }

    async findAll(): Promise<Profile[]> {
        const profiles = await this.profileModel.find().exec();
        return profiles;
    }
    async findById(id: number): Promise<Profile> {
        const profile = await this.profileModel.findById(id).exec();
        return profile;
    }
    async findOne(options: object): Promise<Profile> {
        const profile = await this.profileModel.findOne(options).exec();
        return profile;
    }
    create(profileDTO: ProfileDTO): Promise<Profile> {
        const profile = new this.profileModel(profileDTO);
        return profile.save();
    }
    async update(id: number, profileDTO: ProfileDTO): Promise<Profile> {
        const profile = await this.profileModel.findByIdAndUpdate(id,profileDTO,{new:true}).exec();
        return profile;
    }
    async delete(id: number): Promise<Profile> {
        const profile = await this.profileModel.findByIdAndDelete(id).exec();
        return profile;
    }
}
