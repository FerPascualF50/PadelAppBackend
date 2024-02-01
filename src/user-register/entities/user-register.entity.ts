import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {IsEmail, IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserRegisterDocument = HydratedDocument<UserRegister>;

@Schema({ timestamps: true })
export class UserRegister {
  @IsEmail()
  @IsNotEmpty()
  @Prop()
  email: string;

  @Prop()
  @IsNotEmpty()
  avatar: string;

  @Prop()
  @IsNotEmpty()
  token: string;
}

export const UserRegisterSchema = SchemaFactory.createForClass(UserRegister);
