import { IsUUID } from 'class-validator';
import { CreateClienteInput } from './create-cliente.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClienteInput extends PartialType(CreateClienteInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
