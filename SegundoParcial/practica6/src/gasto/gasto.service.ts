import { Injectable } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Repository } from 'typeorm';
import { Gasto } from './entities/gasto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GastoService {

  constructor(
    @InjectRepository(Gasto)
    private gastoRepository: Repository<Gasto>,
  ) {}

  create(createGastoDto: CreateGastoDto) {
    const gasto = this.gastoRepository.create(createGastoDto);
    return this.gastoRepository.save(gasto);
  }

  findAll() {
    return this.gastoRepository.find();
  }

  findOne(id: number) {
    return this.gastoRepository.findOneBy({ id: id});
  }

  update(id: number, updateGastoDto: UpdateGastoDto) {
    const gasto = this.gastoRepository.create(updateGastoDto);
    return this.gastoRepository.update(id, gasto);
  }

  async remove(id: number) {
    const gasto = await this.gastoRepository.findOneBy({ id: id });
    gasto.status = false;
    return this.gastoRepository.remove(gasto);
  }
}
