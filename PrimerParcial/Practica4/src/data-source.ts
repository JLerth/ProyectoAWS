import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cliente } from "./entity/Cliente"
import { Concepto } from "./entity/Concepto"
import { Gasto } from "./entity/Gasto"
import { Usuario } from "./entity/Usuario"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Cliente, Concepto, Gasto, Usuario],
    migrations: [],
    subscribers: [],
})
