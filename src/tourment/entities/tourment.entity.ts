import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { Club } from 'src/club/entities/club.entity';
import { Court } from 'src/court/entities/court.entity';
import { User } from 'src/user/entities/user.entity';

export type TourmentDocument = HydratedDocument<Tourment>;

@Schema({ timestamps: true })
export class Tourment {
  @IsNotEmpty()
  @Prop()
  name: string;

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Club' })
  club: Club;

  @IsNotEmpty()
  @Prop()
  instance: string;

  @IsNotEmpty()
  @Prop()
  startDay: string;
  
  @IsNotEmpty()
  @Prop()
  finishday: string;
  
  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Court' })
  court: Court;
}

export const TourmentSchema = SchemaFactory.createForClass(Tourment);

