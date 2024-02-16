import { DataSource, DataSourceOptions } from 'typeorm';

export const dbdatasource: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  // Migration path
  migrations: ['dist/db/migrations/*.js'],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dbdatasource);
export default dataSource;
