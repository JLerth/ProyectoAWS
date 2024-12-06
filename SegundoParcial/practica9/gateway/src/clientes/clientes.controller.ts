import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('clientes')
export class ClientesController {
  constructor(@Inject( NATS_SERVICE ) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
  }

  @Get()
  findAll() {
    return this.client.send({ cmd: 'get-clientes' }, {}).pipe(
      catchError((error) => {
        throw new RpcException(error);
      })
    );
  }

  @Get(':id')

  findOne(@Param('id') id: string) {
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
