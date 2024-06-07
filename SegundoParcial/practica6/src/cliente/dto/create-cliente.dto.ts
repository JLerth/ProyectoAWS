import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateClienteDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    identificacion: string;
}
