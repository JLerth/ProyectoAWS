import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    @IsNotEmpty()
    id: number;
}
