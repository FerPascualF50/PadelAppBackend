import { PartialType } from '@nestjs/mapped-types';
import { CreateTourmentDto } from './create-tourment.dto';

export class UpdateTourmentDto extends PartialType(CreateTourmentDto) {}
