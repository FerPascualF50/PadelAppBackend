import { Prop } from '@nestjs/mongoose';

export class CreateUserDto {
  @Prop({ type: {} })
  readonly userRegister: string;
  
  @Prop({ type: [] })
  readonly userRol: string;

  @Prop()
  readonly name: string;
  
  @Prop()
  readonly lastName: string;
}
