import { DataSource, DataSourceOptions } from 'typeorm';

export const dbdatasource: DataSourceOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  // Migration path
  migrations: ['build/task/migrations/*.js'],
  migrationsTableName: 'migrarions',
};

const dataSource = new DataSource(dbdatasource);
export default dataSource;
