import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { Rol } from 'src/rol/entities/rol.entity';
import { UserRegister } from 'src/user-register/entities/user-register.entity';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserRegister' })
  userRegister: UserRegister;
  
  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Rol' })
  userRol: Rol;

  @Prop()
  name: string;
  
  @Prop()
  lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
