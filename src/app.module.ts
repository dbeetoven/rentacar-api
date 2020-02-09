import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { CarsModule } from './app/cars/cars.module';
import { CustomerModule } from './app/customer/customer.module';
import { PostsModule } from './app/posts/posts.module';
import { ProfileModule } from './app/profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rc:zmnBp9GQNFYZyEb9@emigralabdb-hxdbd.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true },
    ),
    CustomerModule,
    PostsModule,
    CarsModule,
    ProfileModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
