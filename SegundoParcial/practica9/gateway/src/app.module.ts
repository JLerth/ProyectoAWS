import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [ClientesModule, NatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
