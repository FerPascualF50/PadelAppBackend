import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { City } from 'src/city/entities/city.entity';
import { User } from 'src/user/entities/user.entity';

export type ClubDocument = HydratedDocument<Club>;

@Schema({ timestamps: true })
export class Club {
  @Prop()
  name: string;

  @Prop()
  street: string;

  @Prop()
  country: string;

  @Prop()
  province: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'City' })
  city: City;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
  

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userRol: User;
}

export const ClubSchema = SchemaFactory.createForClass(Club);
