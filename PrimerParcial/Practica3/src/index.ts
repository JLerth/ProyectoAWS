import { AppDataSource } from "./data-source"
import { Cliente } from "./entity/Cliente"
import { crearCliente } from "./models/crearCliente";
import { consultarClienteId, consultarClienteIdentificacion } from "./models/ConsultarCliente";


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