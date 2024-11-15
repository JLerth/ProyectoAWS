import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoResolver } from './gasto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';

@Module({
  providers: [GastoResolver, GastoService],
  imports: [TypeOrmModule.forFeature([Gasto])],
  exports: [TypeOrmModule]
})
export class GastoModule {}
