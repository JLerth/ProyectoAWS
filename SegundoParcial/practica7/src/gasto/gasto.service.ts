import { Injectable } from '@nestjs/common';
import { CreateGastoInput } from './dto/create-gasto.input';
import { UpdateGastoInput } from './dto/update-gasto.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GastoService {

  constructor(
    @InjectRepository(Gasto)
    private readonly gastoRepository: Repository<Gasto>,
  ){}

  async create(createGastoInput: CreateGastoInput): Promise<Gasto> {
    const created= this.gastoRepository.create(createGastoInput);
    return await this.gastoRepository.save(created);
  }

  async findAll(): Promise<Gasto[]> {
    return await this.gastoRepository.find();
  }

  async findOne(id: string): Promise<Gasto> {
    return await this.gastoRepository.findOneBy({id});
  }

  async update(id: string, updateGastoInput: UpdateGastoInput): Promise<Gasto> {
    const updated= await this.gastoRepository.preload(updateGastoInput);
    if (!updated){
      throw new Error('No se encontro el gasto');
    }
    return await this.gastoRepository.save(updated);
  }

  async remove(id: string): Promise<Gasto> {
    const removed= await this.gastoRepository.findOne({where: {id}});
    if (!removed){
      throw new Error('No se encontro el gasto');
    }
    await this.gastoRepository.remove(removed);
    return {...removed, id};
  }
}
