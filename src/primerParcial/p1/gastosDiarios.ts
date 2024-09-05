interface IClientes{
    id:number;
    nombre:string;
    indentificacion:string;
}

interface IProductos{
    id:number;
    nombre:string;
    categoria:string;
}

const cliente: IClientes[]=[
    {id:1, nombre:'J', indentificacion:'cedula'},
    {id:2, nombre:'A', indentificacion:'telefono'},
    {id:3, nombre:'R', indentificacion:'direccion'},
    {id:4, nombre:'O', indentificacion:'direccion'},
    {id:5, nombre:'Ñ', indentificacion:'direccion'},
]

const producto: IProductos[]=[
    {id:1, nombre:'leche', categoria:'lacteos'},
    {id:2, nombre:'yogurt', categoria:'lacteos'},
    {id:3, nombre:'queso', categoria:'lacteos'},
    {id:4, nombre:'cereales', categoria:'granos'},
    {id:5, nombre:'arroz', categoria:'granos'},
]

export{
    IClientes,
    IProductos,
    producto,
    cliente
}
