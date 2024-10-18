import { Router } from 'express';
import { AppDataSource } from '../data-source';
import {Cliente, Concepto, Gasto, Entorno} from '../entity/Objeto';

const routerConcepto = Router()
const conceptoRepository = AppDataSource.getRepository(Concepto)
const entornoRepository = AppDataSource.getRepository(Entorno);

routerConcepto.put('/:id', async (req, res) => {
    //No terminada :(
})

export default routerConcepto