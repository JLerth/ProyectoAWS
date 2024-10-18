import { AppDataSource } from "./data-source"
import server from 'express'
import { Cliente, Concepto, Gasto, Entorno } from "./entity/Objeto"

const app = server();
app.use(server.json());

async function migrarDatos() {

    const ClienteRepository = AppDataSource.getRepository(Cliente);
    const ConceptoRepository = AppDataSource.getRepository(Concepto);
    const GastosRepository = AppDataSource.getRepository(Gasto);
    const EntornoRepository = AppDataSource.getRepository(Entorno);

    // Entornos
    const entornos = [
        { Descripcion: 'Desarrollo' },
        { Descripcion: 'Pruebas' },
        { Descripcion: 'Producción' },
    ];

    for (const entornoData of entornos) {
        const nuevoEntorno = new Entorno();
        nuevoEntorno.Descripcion = entornoData.Descripcion;
        await EntornoRepository.save(nuevoEntorno);
    }

    // Cliente
    for (let i = 0; i < 10; i++) {
        const nuevoCliente = new Cliente();
        nuevoCliente.TotalElementos = 2;
        nuevoCliente.tipo = 'maestro';
        nuevoCliente.datos = [
            { atributo1: `cliente${i + 1}`, atributo2: i + 1 }
        ];
        await ClienteRepository.save(nuevoCliente);
    }

    // Concepto

    const entornoPruebas = await EntornoRepository.findOneBy({ Descripcion: 'Pruebas' });

    for (let i = 0; i < 10; i++) {
        const nuevoConcepto = new Concepto();
        nuevoConcepto.TotalElementos = 1;
        nuevoConcepto.tipo = 'transaccional';
        nuevoConcepto.datos = [
            { atributo1: `00${i + 1}`, atributo2: `Prueba${i + 1}`, atributo3: 234 }
        ];

        if (entornoPruebas) {
            nuevoConcepto.entorno = entornoPruebas;
        }
        await ConceptoRepository.save(nuevoConcepto);
    }


    // Gastos
    for (let i = 0; i < 10; i++) {
        const nuevoGasto = new Gasto();
        nuevoGasto.TotalElementos = 1;
        nuevoGasto.tipo = 'maestro';
        nuevoGasto.datos = [
            { atributo1: 234, atributos: 23 }
        ];
        await GastosRepository.save(nuevoGasto);
    }

    console.log("Datos migrados exitosamente.");
    
}

AppDataSource.initialize()
    .then(() => {
        console.log("Base de datos inicializada correctamente");

        migrarDatos();

        app.listen(3000, () => {
            console.log('Server on port 3000');
        });
    })
    .catch(error => console.log(error));
