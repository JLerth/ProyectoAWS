import { IClientes, IGastos, cliente } from "./gastosDiarios";

function busquedaClientePromise(id:number):Promise<IClientes>{
    return new Promise((resolve, reject)=>{
        const clientes = cliente.find(clientes => clientes.id === id);
        if(clientes){
            resolve(clientes);
        } else{
            reject('No se encontro el cliente');
            return;
        }
    })
}

export{
    busquedaClientePromise
}