import { Injectable } from '@nestjs/common';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';

@Injectable()
export class ConceptoService {

  constructor(
    @InjectRepository(Concepto)
    private readonly conceptoRepository: Repository<Concepto>,
  ){}

  async create(createConceptoInput: CreateConceptoInput): Promise<Concepto> {
    const created= this.conceptoRepository.create(createConceptoInput);
    return await this.conceptoRepository.save(created);
  }

  async findAll(): Promise<Concepto[]> {
    return await this.conceptoRepository.find();
  }

  async findOne(id: string): Promise<Concepto> {
    return await this.conceptoRepository.findOneBy({id});
  }

  async update(id: string, updateConceptoInput: UpdateConceptoInput): Promise<Concepto> {
    const updated= await this.conceptoRepository.preload(updateConceptoInput);
    if (!updated){
      throw new Error('No se encontro el concepto');
    }
    return await this.conceptoRepository.save(updated);
  }

  async remove(id: string): Promise<Concepto> {
    const removed = await this.conceptoRepository.findOne({where: {id}});
    if (!removed){
      throw new Error('No se encontro el concepto');
    }
    await this.conceptoRepository.remove(removed);
    return {...removed, id};
  }
}
