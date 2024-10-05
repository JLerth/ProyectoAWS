// import optionRouter from './cliente.route'
import routerCliente from './cliente.route'
import routerConcepto from './concepto.route'
import routerGasto from './gasto.route'
import routerUsuario from './usuario.route'
import { jwtMiddleware } from '../middleware/jwt'

export {
    // optionRouter,
    routerCliente,
    routerConcepto,
    routerGasto,
    routerUsuario,
    jwtMiddleware
}