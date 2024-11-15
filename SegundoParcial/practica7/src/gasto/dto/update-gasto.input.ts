import { IsUUID } from 'class-validator';
import { CreateGastoInput } from './create-gasto.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGastoInput extends PartialType(CreateGastoInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
