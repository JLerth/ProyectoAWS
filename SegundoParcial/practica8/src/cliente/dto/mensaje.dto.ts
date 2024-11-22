import { IsString, MinLength } from "class-validator";


export class messageDto {
    @IsString()
    @MinLength(1)   
    message: string;
}