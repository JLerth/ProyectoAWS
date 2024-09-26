import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    identificacion: string

}
