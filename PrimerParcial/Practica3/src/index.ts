import { AppDataSource } from "./data-source"
import { Cliente } from "./entity/Cliente"
import { crearCliente } from "./models/crearCliente";
import { consultarClienteId, consultarClienteIdentificacion } from "./models/ConsultarCliente";
import server from 'express'
import { optionRouter } from "./routes"

//Se esta trabajando con Xampp como base de datos local. 
// AppDataSource.initialize().then(async () => {
//     console.log("Base de datos inicializada correctamente");

//     // Crear un nuevo cliente
//     // await crearCliente("J", "123456789");

//     // Consultar cliente por ID
//     // await consultarClienteId(1); 

//     // Consultar cliente por identificación
//     // await consultarClienteIdentificacion("123456789");

//     // console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error));

const app = server();
app.use(server.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Base de datos inicializada correctamente");
        
        app.use('/options', optionRouter);

        app.listen(3000, () => {
            console.log('Server on port 3000');
        });
    }).catch(error => console.log(error));

//No me dio tiempo para las otras 2 entidades :)
//falla el delete no se porque