import { MikroORM } from '@mikro-orm/core';
import { Cliente } from './entity/Cliente';

export default {
  entities: [Cliente],
  dbName: 'test',
  type: 'mysql',
  user: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
  debug: true,
} as Parameters<typeof MikroORM.init>[0];