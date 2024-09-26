import { Router } from 'express';
import { AppDataSource } from '../data-source'
import { Cliente } from '../entity/Cliente'

const router = Router()
const clienteRepository = AppDataSource.getRepository(Cliente)

//Consulta general (GET): Obtener todos los clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await clienteRepository.find()
        res.json(clientes)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los clientes', error })
    }
})

// Consulta individual (GET): Obtener un cliente por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const cliente = await clienteRepository.findOne({ where: { id: parseInt(id) } })
        if (cliente) {
        res.json(cliente)
        } else {
        res.status(404).json({ message: 'Cliente no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el cliente', error })
    }
})

// Crear (POST): Crear un nuevo cliente
router.post('/', async (req, res) => {
    try {
        const { nombre, identificacion } = req.body
        const nuevoCliente = clienteRepository.create({ nombre, identificacion })
        const clienteGuardado = await clienteRepository.save(nuevoCliente)
        res.json(clienteGuardado)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el cliente', error })
    }
})

// Modificar (PATCH): Actualizar parcialmente un cliente por ID
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, identificacion } = req.body
        const cliente = await clienteRepository.findOne({ where: { id: parseInt(id) } })

        if (cliente) {
        if (nombre) cliente.nombre = nombre
        if (identificacion) cliente.identificacion = identificacion

        const clienteActualizado = await clienteRepository.save(cliente)
        res.json(clienteActualizado)
        } else {
        res.status(404).json({ message: 'Cliente no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente', error })
    }
})

// Eliminar (DELETE): Eliminar un cliente por ID
// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const result = await clienteRepository.delete(id)
//         if (result.affected === 0) {
//         return res.status(404).json({ message: 'Cliente no encontrado' })
//         }
//         res.json({ message: 'Cliente eliminado correctamente' })
//     } catch (error) {
//         res.status(500).json({ message: 'Error al eliminar el cliente', error })
//     }
// })

export default router
