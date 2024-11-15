import { IsUUID } from 'class-validator';
import { CreateConceptoInput } from './create-concepto.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConceptoInput extends PartialType(CreateConceptoInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
