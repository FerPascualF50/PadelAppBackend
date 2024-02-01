import { Decimal128 } from 'mongoose';

export class CreateCityDto {
  city_id: number;
  name: string;
  state_id: number;
  state_code: string;
  state_name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  latitude: { type: Decimal128 };
  longitude: { type: Decimal128 };
  wikiDataId: string;
}
