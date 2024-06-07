import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";


export class CreateGastoDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsDateString()
    @IsNotEmpty()
    fecha: Date;

    @IsString()
    @IsNotEmpty()
    hora: string;

    @IsNumber()
    @Min(0)
    valorGasto: number
}
