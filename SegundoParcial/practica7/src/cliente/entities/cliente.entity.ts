import { ObjectType, Field, ID} from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('cliente')
export class Cliente {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  identificacion: string;
}
