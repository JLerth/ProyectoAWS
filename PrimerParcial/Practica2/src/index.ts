import { AppDataSource } from "./data-source"
import { MikroORM } from '@mikro-orm/core';
import  MikroOrmConfig from "./mikro-orm"
import { Cliente } from "./entity/Cliente"
import { crearCliente } from "./models/crearCliente";
import { consultarClienteId, consultarClienteIdentificacion } from "./models/ConsultarCliente";
import { eliminarCliente } from "./models/eliminarCliente";
import { modificarCliente } from "./models/modificarCliente";

//Se esta trabajando con Xampp como base de datos local. 
AppDataSource.initialize().then(async () => {
    console.log("Base de datos inicializada correctamente");

    // Crear un nuevo cliente
    // await crearCliente("J", "123456789");

    // Consultar cliente por ID
    // await consultarClienteId(1); 

    // Consultar cliente por identificación
    // await consultarClienteIdentificacion("123456789");

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error));


//---------------------------No se cual es el fallo con el MikroORM aaaaaaaaaaaaa-----------------------
async function main() {
    const orm = await MikroORM.init(MikroOrmConfig);
    const em = orm.em;

    // Modificar un cliente
    // await modificarCliente(em, 1, "Nuevo Nombre", "Nueva Identificacion");

    // Eliminar un cliente
    // await eliminarCliente(em, 1);
}

// main();