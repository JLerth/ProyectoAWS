interface IClientes{
    id:number;
    nombre:string;
    indentificacion:string;
    gasto:IGastos[]
}

interface IGastos{
    id:number;
    descripcion:string;
    monto:number;
}

const cliente: IClientes[]=[
    {id:1, nombre:'J', indentificacion:'cedula',
        gasto:[{id:1, descripcion:'Gasolina', monto:10},]
    },
    {id:2, nombre:'A', indentificacion:'telefono',
        gasto:[{id:2, descripcion:'Comida', monto:20},]
    },
    {id:3, nombre:'R', indentificacion:'direccion',
        gasto:[{id:3, descripcion:'Luz', monto:30},]
    },
    {id:4, nombre:'O', indentificacion:'direccion',
        gasto:[{id:4, descripcion:'Agua', monto:40},]
    },
    {id:5, nombre:'Ñ', indentificacion:'direccion',
        gasto:[{id:5, descripcion:'Ropa', monto:50},]
    },
]

export{
    IClientes,
    IGastos,
    cliente,
}
