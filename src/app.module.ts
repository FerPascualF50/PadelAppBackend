import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CityModule } from './city/city.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ClubModule } from './club/club.module';
import { RolModule } from './rol/rol.module';
import { TourmentModule } from './tourment/tourment.module';
import { CourtModule } from './court/court.module';
import { UserRegisterModule } from './user-register/user-register.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.lpnjztn.mongodb.net/${process.env.DATABASE_NAME}`,
    ),
    ProductModule,
    CityModule,
    UserModule,
    ClubModule,
    RolModule,
    TourmentModule,
    CourtModule,
    UserRegisterModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
