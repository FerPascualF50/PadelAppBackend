import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CityDocument = HydratedDocument<City>;

@Schema({ timestamps: true })
export class City {
  @Prop({ unique: true })
  city_id: Number;

  @Prop({ unique: true })
  name: String;

  @Prop()
  state_id: Number;

  @Prop()
  state_code: String;

  @Prop()
  state_name: String;

  @Prop()
  country_id: Number;

  @Prop()
  country_code: String;

  @Prop()
  country_name: String;

  @Prop({ unique: true })
  latitude: Number;

  @Prop({ unique: true })
  longitude: Number;

  @Prop()
  wikiDataId: String;
}
export const CitySchema = SchemaFactory.createForClass(City);
