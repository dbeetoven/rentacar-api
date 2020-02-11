import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import { CarsModule } from './app/cars/cars.module';
import { CustomerModule } from './app/customer/customer.module';
import { PostsModule } from './app/posts/posts.module';
import { ProfileModule } from './app/profile/profile.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';

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
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port:number | string;

  constructor(private readonly _configService:ConfigService){
     AppModule.port= this._configService.get(Configuration.PORT);
     console.log(AppModule.port);
     
  }
}
