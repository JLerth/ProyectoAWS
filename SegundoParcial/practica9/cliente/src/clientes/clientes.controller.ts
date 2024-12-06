import { Controller} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @MessagePattern('createCiudadano')
  create(@Payload() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @MessagePattern({cmd: 'get-clientes'})
  findAll() {
    return this.clientesService.findAll();
  }

  @MessagePattern('findOneCliente')
  findOne(@Payload() id: number) {
    return this.clientesService.findOne(+id);
  }

  @MessagePattern('updateCliente')
  update(@Payload() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(updateClienteDto.id, updateClienteDto);
  }

  @MessagePattern('removeCliente')
  remove(@Payload() id: number) {
    return this.clientesService.remove(+id);
  }
}
