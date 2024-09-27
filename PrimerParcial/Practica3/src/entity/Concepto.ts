import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Concepto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descripcion: string

}
