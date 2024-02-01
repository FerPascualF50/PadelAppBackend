import { PartialType } from '@nestjs/mapped-types';
import { CreateClubDto } from './create-club.dto';

export class UpdateClubDto extends PartialType(CreateClubDto) {
  readonly name: string;
  readonly street: string;
  readonly country: string;
  readonly province: string;
  readonly city: {};
  readonly latitude: number;
  readonly longitude: number;
  readonly userRol: string;
}
