import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'mythology',
  username: 'kamiranoff',
  password: 'jenifer',
  entities: [__dirname + './../db/**/*.entity{.ts,.js}'],
  synchronize: false,
};
