import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("cliente")
export class Cliente {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    identificacion: string;
    status: boolean;
}
