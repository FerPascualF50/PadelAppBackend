export class CreateClubDto {
  readonly name: string;
  readonly street: string;
  readonly country: string;
  readonly province: string;
  readonly city: {};
  readonly latitude: number;
  readonly longitude: number;
  readonly userRol: string;
}
