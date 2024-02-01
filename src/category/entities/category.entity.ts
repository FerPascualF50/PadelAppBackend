import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
  @IsNotEmpty()
  @Prop()
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
