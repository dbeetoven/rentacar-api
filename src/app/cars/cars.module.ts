import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema } from 'src/schemas/car.schema';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'Car',schema:CarSchema}])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
