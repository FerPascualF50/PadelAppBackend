import { Prop } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  @Prop()
  name: string;
}
