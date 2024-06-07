import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { Gasto } from './entities/gasto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [GastoController],
  providers: [GastoService],
  imports: [
    TypeOrmModule.forFeature([Gasto])
  ],
  exports: [TypeOrmModule]
})
export class GastoModule {}
