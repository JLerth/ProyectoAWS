import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteGateway } from './cliente.gateway';

@Module({
  providers: [ClienteGateway, ClienteService],
})
export class ClienteModule {}
