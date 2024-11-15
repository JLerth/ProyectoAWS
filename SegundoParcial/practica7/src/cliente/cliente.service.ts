import { Injectable } from '@nestjs/common';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ){}

  async create(createClienteInput: CreateClienteInput): Promise<Cliente> {
    const created= this.clienteRepository.create(createClienteInput);
    return await this.clienteRepository.save(created);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async findOne (id: string): Promise<Cliente> {
    return await this.clienteRepository.findOneBy({id});
  }

  async update(id: string, updateClienteInput: UpdateClienteInput): Promise<Cliente> {
    const updated= await this.clienteRepository.preload(updateClienteInput);
    if (!updated){
      throw new Error('No se encontro el cliente');
    }
    return await this.clienteRepository.save(updated)
  }

  async remove(id: string): Promise<Cliente> {
    const removed = await this.clienteRepository.findOne({where: {id}});
    if (!removed){
      throw new Error('No se encontro el cliente');
    }
    await this.clienteRepository.remove(removed);
    return {...removed, id};
  }
}
