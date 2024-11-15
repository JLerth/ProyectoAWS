import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { ConceptoResolver } from './concepto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';

@Module({
  providers: [ConceptoResolver, ConceptoService],
  imports: [TypeOrmModule.forFeature([Concepto])],
  exports: [TypeOrmModule]
})
export class ConceptoModule {}
