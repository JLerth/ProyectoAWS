import { PartialType } from '@nestjs/mapped-types';
import { CreateGastoDto } from './create-gasto.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateGastoDto extends PartialType(CreateGastoDto) {
    @IsNotEmpty()
    id: number;
}
