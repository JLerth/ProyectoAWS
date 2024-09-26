import { AppDataSource } from "../data-source"
import { Cliente } from "../entity/Cliente"

// Función para consultar cliente por ID
async function consultarClienteId(id: number) {
    const cliente = await AppDataSource.manager.findOneBy(Cliente, { id });

    if (cliente) {
        console.log("ID del cliente encontrado: ", cliente);
    } else {
        console.log(`No se encontró la ID del cliente: ${id}`);
    }
}

// Función para consultar cliente por identificación
async function consultarClienteIdentificacion(identificacion: string) {
    const cliente = await AppDataSource.manager.findOneBy(Cliente, { identificacion });

    if (cliente) {
        console.log("Identificacion del cliente encontrado: ", cliente);
    } else {
        console.log(`No se encontró la identificación del cliente: ${identificacion}`);
    }
}

export{
    consultarClienteId,
    consultarClienteIdentificacion
}