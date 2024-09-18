import {recorrer} from './models/recorrer';
import {busquedaCliente} from './models/callback';
import {busquedaClientePromise} from './models/promises';
import { busquedaClienteAsync } from './models/async';
import {fetchData, IPost} from './models/post';

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
// fetchData<IPost>('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(posts => {
//         console.log(posts);
//     })
//     .catch(error => console.error(error));
