import { IClientes, IGastos, cliente } from "./gastosDiarios";

async function busquedaClienteAsync(id:number) {
    const clientes = cliente.find(cliente => cliente.id === id);
    if(!clientes){
        throw new Error('No se encontro el cliente');
    }
    return clientes;
}

export{
    busquedaClienteAsync
}