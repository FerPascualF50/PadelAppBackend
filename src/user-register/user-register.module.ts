import { Module } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';
import { UserRegisterController } from './user-register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRegister, UserRegisterSchema } from './entities/user-register.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: UserRegister.name, schema: UserRegisterSchema}
    ])
  ],
  controllers: [UserRegisterController],
  providers: [UserRegisterService]
})
export class UserRegisterModule {}
