import { Prop } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserRegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @Prop()
  readonly email: string;

  @Prop()
  @IsNotEmpty()
  readonly avatar: string;

  @Prop()
  @IsNotEmpty()
  readonly token: string;
}
