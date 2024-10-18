import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"


@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    TotalElementos: number

    @Column()
    tipo: string

    @Column('json', { nullable: false })
    datos: Array<{atributo1: string, atributo2: number}>

    @ManyToOne(() => Entorno, entorno => entorno.clientes)
    entorno: Entorno;

}

@Entity()
export class Concepto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    TotalElementos: number

    @Column()
    tipo: string

    @Column('json', { nullable: false })
    datos: Array <{atributo1: string, atributo2: string, atributo3:number}>

    @ManyToOne(() => Entorno, entorno => entorno.conceptos)
    entorno: Entorno;
    
}

@Entity()
export class Gasto{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    TotalElementos: number

    @Column()
    tipo: string

    @Column('json', { nullable: false })
    datos: Array <{atributo1: number, atributos: number}>

    @ManyToOne(() => Entorno, entorno => entorno.gastos)
    entorno: Entorno;

}

@Entity()
export class Entorno {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Descripcion: string

    @OneToMany(() => Cliente, cliente => cliente.entorno)
    clientes: Cliente[];

    @OneToMany(() => Concepto, concepto => concepto.entorno)
    conceptos: Concepto[];

    @OneToMany(() => Gasto, gasto => gasto.entorno)
    gastos: Gasto[];
    

}