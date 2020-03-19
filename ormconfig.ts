import { POSTGRES } from 'config';
import { ConnectionOptions } from 'typeorm';

const typeOrmConfig: ConnectionOptions = {
    entities: ['libs/entities/src/entities/index.ts'],
    type: 'postgres',
    host: POSTGRES.HOST,
    port: POSTGRES.PORT,
    username: POSTGRES.USERNAME,
    password: POSTGRES.PASSWORD,
    database: POSTGRES.DATABASE,
    migrationsRun: false,
    synchronize: true,
};

export = typeOrmConfig;
