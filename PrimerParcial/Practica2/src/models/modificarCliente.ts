import { EntityManager } from '@mikro-orm/core';
import { Cliente } from '../entity/Cliente';

// Función para modificar cliente en MikroORM
async function modificarCliente(em: EntityManager, id: number, nombre: string, identificacion: string) {
    try {
        const cliente = await em.findOne(Cliente, { id });
        if (cliente) {
            cliente.nombre = nombre;
            cliente.identificacion = identificacion;
            await em.flush();
            console.log("Cliente modificado: ", cliente);
        } else {
            console.log("Cliente no encontrado para modificar");
        }
    } catch (error) {
        console.error("Error al modificar el cliente ", error);
    }
}

export{
    modificarCliente
}