import { AppDataSource } from "../data-source"
import { Cliente } from "../entity/Cliente"

// Función para crear un cliente
async function crearCliente(nombre: string, identificacion: string) {
    const cliente = new Cliente();
    cliente.nombre = nombre;
    cliente.identificacion = identificacion;

    await AppDataSource.manager.save(cliente);
    console.log("ID del cliente guardado: " + cliente.id);
}

export{
    crearCliente
}