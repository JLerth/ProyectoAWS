import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";


export class CreateConceptoDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}
