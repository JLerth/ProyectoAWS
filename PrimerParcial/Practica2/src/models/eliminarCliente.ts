import { EntityManager } from '@mikro-orm/core';
import { Cliente } from '../entity/Cliente';

// Función para eliminar cliente en MikroORM
async function eliminarCliente(em: EntityManager, id: number) {
    try {
        const cliente = await em.findOne(Cliente, { id });
        if (cliente) {
            await em.removeAndFlush(cliente);
            console.log("Cliente eliminado: ", cliente);
        } else {
            console.log("Cliente no encontrado para eliminar");
        }
    } catch (error) {
        console.error("Error al eliminar cliente ", error);
    }
}

export{
    eliminarCliente
}