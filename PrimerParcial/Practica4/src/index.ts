import { AppDataSource } from "./data-source"
import server from 'express'
import routerCliente from "./routes/cliente.route";
import routerConcepto from "./routes/concepto.route";
import routerGasto from "./routes/gasto.route";
import routerUsuario from "./routes/usuario.route";
import { jwtMiddleware } from "./middleware/jwt";

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
        app.use('/usuarios', routerUsuario); //selecionar usuarios/register o usuarios/login

        app.listen(3000, () => {
            console.log('Server on port 3000');
        });
    })
    .catch(error => console.log(error));
//------------------------No me funciona el jwt :((((((------------------------