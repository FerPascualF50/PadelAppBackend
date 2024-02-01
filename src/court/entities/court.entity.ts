import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {IsNotEmpty } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';
import { Club } from 'src/club/entities/club.entity';
import { User } from 'src/user/entities/user.entity';

export type CourtDocument = HydratedDocument<Court>;

@Schema({ timestamps: true })
export class Court {
  @IsNotEmpty()
  @Prop()
  name: string;

  @IsNotEmpty()
  @Prop()
  number: number;

  @IsNotEmpty()
  @Prop()
  startDayPlay: string;

  @IsNotEmpty()
  @Prop()
  finishDayPlay: string;

  @IsNotEmpty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Club' })
  club: Club;
}

export const CourtSchema = SchemaFactory.createForClass(Court);



