import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateGastoInput {

  @Field(() => Date)
  @IsDate()
  @IsNotEmpty()
  fecha: Date

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  hora: string

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  valorGasto: number
}
