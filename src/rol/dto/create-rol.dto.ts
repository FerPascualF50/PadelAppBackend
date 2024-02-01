import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @Prop()
  readonly name: string;
}
