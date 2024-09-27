import { Router } from 'express';
import { AppDataSource } from '../data-source'
import { Concepto } from '../entity/Concepto'

const routerConcepto = Router()
const conceptoRepository = AppDataSource.getRepository(Concepto)

//Consulta general (GET): Obtener todos los clientes
routerConcepto.get('/', async (req, res) => {
    try {
        const conceptos = await conceptoRepository.find()
        res.json(conceptos)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los conceptos', error })
    }
})

// Consulta individual (GET): Obtener un cliente por ID
routerConcepto.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const concepto = await conceptoRepository.findOne({ where: { id: parseInt(id) } })
        if (concepto) {
            res.json(concepto)
        } else {
            res.status(404).json({ message: 'Concepto no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el concepto', error })
    }
})

// Crear (POST): Crear un nuevo cliente
routerConcepto.post('/', async (req, res) => {
    try {
        const { descripcion } = req.body
        const nuevoConcepto = conceptoRepository.create({ descripcion })
        const conceptoGuardado = await conceptoRepository.save(nuevoConcepto)
        res.json(conceptoGuardado)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el concepto', error })
    }
})

// Modificar (PATCH): Actualizar parcialmente un cliente por ID
routerConcepto.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { descripcion } = req.body
        const concepto = await conceptoRepository.findOne({ where: { id: parseInt(id) } })

        if (concepto) {
            if (descripcion) concepto.descripcion = descripcion

            const conceptoActualizado = await conceptoRepository.save(concepto)
            res.json(conceptoActualizado)
        } else {
            res.status(404).json({ message: 'Concepto no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el concepto', error })
    }
})

// Eliminar (DELETE): Eliminar un cliente por ID
routerConcepto.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const concepto = await conceptoRepository.findOne({ where: { id: parseInt(id) } })
        if (concepto) {
            await conceptoRepository.remove(concepto)
            res.json({ message: 'Concepto eliminado' })
        } else {
            res.status(404).json({ message: 'Concepto no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el concepto', error })
    }
})

export default routerConcepto