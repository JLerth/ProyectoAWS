import { IClientes, IGastos, cliente} from "./gastosDiarios";

function recorrer(){
    cliente.forEach(cliente => {
        console.log(cliente);
    })

}


export{
    recorrer
}