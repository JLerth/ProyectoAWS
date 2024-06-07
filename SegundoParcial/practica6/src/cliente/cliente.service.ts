import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  create(createClienteDto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOneBy({ id: id });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = this.clienteRepository.create(updateClienteDto);
    return this.clienteRepository.update(id, cliente);
  }

  async remove(id: number) {
    const cliente = await this.clienteRepository.findOneBy({ id: id });
    cliente.status = false;
    return this.clienteRepository.remove(cliente);
  }
}
