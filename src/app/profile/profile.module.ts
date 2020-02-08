import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileSchema } from 'src/schemas/profile.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'Profile',schema:ProfileSchema}])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
