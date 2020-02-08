import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './app/customer/customer.module';
import { PostsModule } from './app/posts/posts.module';
import { CarsModule } from './app/cars/cars.module';
import { CommentsModule } from './app/comments/comments.module';
import { ProfileModule } from './app/profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rc:zmnBp9GQNFYZyEb9@emigralabdb-hxdbd.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }),
    CustomerModule,
    PostsModule,
    CarsModule,
    ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
