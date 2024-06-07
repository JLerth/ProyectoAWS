import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("gasto")
export class Gasto {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    fecha: Date

    @Column({ type: 'time' })
    hora: string

    @Column()
    valorGasto: number
    status: boolean
}
