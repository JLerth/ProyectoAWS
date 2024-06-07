import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("concepto")
export class Concepto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;
    status: boolean;
}
