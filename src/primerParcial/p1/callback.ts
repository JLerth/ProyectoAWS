import { IClientes, IGastos, cliente } from "./gastosDiarios";

function busquedaCliente(id:number,
    callback: (error:Error| null, cliente?: IClientes) => void){
        const clientes = cliente.find(cliente => cliente.id === id);
        if(!clientes){
            callback(new Error('No se encontro el cliente'));
            return;
        }
        callback(null, clientes);
    }

export{
    busquedaCliente
}