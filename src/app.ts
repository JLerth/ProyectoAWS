import {recorrer} from './primerParcial/p1/recorrer';
import {busquedaCliente} from './primerParcial/p1/callback';
import {busquedaClientePromise} from './primerParcial/p1/promises';
import { busquedaClienteAsync } from './primerParcial/p1/async';
import {fetchData, IPost} from './primerParcial/p1/post';

//--------------------------Recorrer el array de clientes------------------------------------
// recorrer()

//--------------------------Buscar  el cliente------------------------------------------------
//------------Callback-------------

// busquedaCliente(1, (error, cliente)=>{
//     if(error){
//         console.error(error)
//         return
//     }
//     console.log(cliente)
// })

//------------Promises-------------
// busquedaClientePromise(1)
//     .then(cliente => {
//         console.log(cliente);
//     })
//     .catch(error => console.error(error));

//------------Async-------------
// async function main() {
//     try{
//         const clientes = await busquedaClienteAsync(1);
//         console.log(clientes);
//     }catch(error){
//         console.log(error)
//     }
// }
// main()

//--------------------------Servicio Rest------------------------------------------------
// fetchData<IPost>('https://jsonplaceholder.typicode.com/posts')
//     .then(posts => {
//         console.log(posts);
//     })
//     .catch(error => console.error(error));