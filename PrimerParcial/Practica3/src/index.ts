import { AppDataSource } from "./data-source"
import { crearCliente } from "./models/crearCliente";
import { consultarClienteId, consultarClienteIdentificacion } from "./models/ConsultarCliente";
import server from 'express'
import routerCliente from "./routes/cliente.route";
import routerConcepto from "./routes/concepto.route";
import routerGasto from "./routes/gasto.route";

//Se esta trabajando con Xampp como base de datos local. 
const app = server();
app.use(server.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Base de datos inicializada correctamente");

        // // Descomentar las entidades
        // app.use('/clientes', routerCliente);
        // app.use('/conceptos', routerConcepto);
        // app.use('/gastos', routerGasto);

        app.listen(3000, () => {
            console.log('Server on port 3000');
        });
    }).catch(error => console.log(error));



    
// AppDataSource.initialize().then(async () => {
//     console.log("Base de datos inicializada correctamente");

//     // Crear un nuevo cliente
//     await crearCliente("J", "123456789");

//     // Consultar cliente por ID
//     await consultarClienteId(1); 

//     // Consultar cliente por identificación
//     await consultarClienteIdentificacion("123456789");

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error));