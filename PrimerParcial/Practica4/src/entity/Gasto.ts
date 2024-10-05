import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Gasto {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    fecha: Date

    @Column({ type: 'time' })
    hora: string

    @Column()
    ValorGasto: number
}