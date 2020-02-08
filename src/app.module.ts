import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './app/customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rc:zmnBp9GQNFYZyEb9@emigralabdb-hxdbd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
