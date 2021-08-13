import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'budget_app',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'],
  cli: {
    migrationsDir: 'database/migrations',
  },
};
export default config;
