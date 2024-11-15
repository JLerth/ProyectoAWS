import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('gasto')
export class Gasto {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => Date)
  fecha: Date;

  @Column({ type: 'time' })
  @Field(() => String)
  hora: string;

  @Column()
  @Field(() => Number)
  valorGasto: number;
}
