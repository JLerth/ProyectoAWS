import { Injectable } from '@nestjs/common';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Concepto } from './entities/concepto.entity';

@Injectable()
export class ConceptoService {

  constructor(
    @InjectRepository(Concepto)
    private conceptoRepository: Repository<Concepto>,
  ) {}

  create(createConceptoDto: CreateConceptoDto) {
    const concepto = this.conceptoRepository.create(createConceptoDto);
    return this.conceptoRepository.save(concepto);
  }

  findAll() {
    return this.conceptoRepository.find();
  }

  findOne(id: number) {
    return this.conceptoRepository.findOneBy({ id: id });
  }

  update(id: number, updateConceptoDto: UpdateConceptoDto) {
    const concepto = this.conceptoRepository.create(updateConceptoDto);
    return this.conceptoRepository.update(id, concepto);
  }

  async remove(id: number) {
    const concepto = await this.conceptoRepository.findOneBy({ id: id });
    concepto.status = false;
    return this.conceptoRepository.remove(concepto);
  }
}
