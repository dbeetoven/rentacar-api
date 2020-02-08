import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from 'src/schemas';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'Customer',schema:CustomerSchema}])],
  providers: [CustomerService],
  controllers: [CustomerController]
})
export class CustomerModule {}