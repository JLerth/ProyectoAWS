import { IsString } from "class-validator";

export class CreateClienteDto {

    @IsString()
    public nombre: string;

    @IsString()
    public identificacion: string;
}
