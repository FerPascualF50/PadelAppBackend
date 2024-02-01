import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRegisterDto } from './create-user-register.dto';

export class UpdateUserRegisterDto extends PartialType(CreateUserRegisterDto) {}
