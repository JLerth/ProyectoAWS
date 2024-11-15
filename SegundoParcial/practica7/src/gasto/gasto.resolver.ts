import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GastoService } from './gasto.service';
import { Gasto } from './entities/gasto.entity';
import { CreateGastoInput } from './dto/create-gasto.input';
import { UpdateGastoInput } from './dto/update-gasto.input';

@Resolver(() => Gasto)
export class GastoResolver {
  constructor(private readonly gastoService: GastoService) {}

  @Mutation(() => Gasto)
  createGasto(@Args('createGastoInput') createGastoInput: CreateGastoInput): Promise<Gasto> {
    return this.gastoService.create(createGastoInput);
  }

  @Query(() => [Gasto], { name: 'gastos' })
  findAll(): Promise<Gasto[]> {
    return this.gastoService.findAll();
  }

  @Query(() => Gasto, { name: 'gasto' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Gasto> {
    return this.gastoService.findOne(id);
  }

  @Mutation(() => Gasto)
  updateGasto(@Args('updateGastoInput') updateGastoInput: UpdateGastoInput): Promise<Gasto> {
    return this.gastoService.update(updateGastoInput.id, updateGastoInput);
  }

  @Mutation(() => Gasto)
  removeGasto(@Args('id', { type: () => String }) id: string): Promise<Gasto> {
    return this.gastoService.remove(id);
  }
}
