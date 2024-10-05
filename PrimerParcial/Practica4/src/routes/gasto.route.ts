import { Router } from 'express';
import { AppDataSource } from '../data-source'
import { Gasto } from '../entity/Gasto'

const routerGasto = Router()
const gastoRepository = AppDataSource.getRepository(Gasto)

//Consulta general (GET): Obtener todos los clientes
routerGasto.get('/', async (req, res) => {
    try {
        const gastos = await gastoRepository.find()
        res.json(gastos)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los gastos', error })
    }
})

// Consulta individual (GET): Obtener un cliente por ID
routerGasto.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const gasto = await gastoRepository.findOne({ where: { id: parseInt(id) } })
        if (gasto) {
            res.json(gasto)
        } else {
            res.status(404).json({ message: 'Gasto no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el gasto', error })
    }
})

// Crear (POST): Crear un nuevo cliente
routerGasto.post('/', async (req, res) => {
    try {
        const { fecha, hora, ValorGasto } = req.body
        const nuevoGasto = gastoRepository.create({ fecha, hora, ValorGasto })
        const gastoGuardado = await gastoRepository.save(nuevoGasto)
        res.json(gastoGuardado)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el gasto', error })
    }
})

// Modificar (PATCH): Actualizar parcialmente un cliente por ID
routerGasto.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { fecha, hora, ValorGasto } = req.body
        const gasto = await gastoRepository.findOne({ where: { id: parseInt(id) } })

        if (gasto) {
            if (fecha) gasto.fecha = fecha
            if (hora) gasto.hora = hora
            if (ValorGasto) gasto.ValorGasto = ValorGasto

            const gastoActualizado = await gastoRepository.save(gasto)
            res.json(gastoActualizado)
        } else {
            res.status(404).json({ message: 'Gasto no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el gasto', error })
    }
})

// Eliminar (DELETE): Eliminar un cliente por ID
routerGasto.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const gasto = await gastoRepository.findOne({ where: { id: parseInt(id) } })
        if (gasto) {
            await gastoRepository.remove(gasto)
            res.json({ message: 'Gasto eliminado' })
        } else {
            res.status(404).json({ message: 'Gasto no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el gasto', error })
    }
})

export default routerGasto