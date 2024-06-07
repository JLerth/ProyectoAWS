import { PartialType } from '@nestjs/mapped-types';
import { CreateConceptoDto } from './create-concepto.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateConceptoDto extends PartialType(CreateConceptoDto) {
    @IsNotEmpty()
    id: number
}
