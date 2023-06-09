


// // require('dotenv').config();
// // import 'reflect-metadata';
// // import { DataSource } from 'typeorm';
// // import config from 'config';
// // import { createConnection } from 'mysql2/promise';

// // const mysqlConfig = config.get<{
// //   host: string;
// //   port: number;
// //   username: string;
// //   password: string;
// //   database: string;
// // }>('mysqlConfig');

// // export const AppDataSource = new DataSource({
// //   type: 'mysql',
// //   host: mysqlConfig.host,
// //   username: mysqlConfig.username,
// //   password: mysqlConfig.password,
// //   database: mysqlConfig.database,
// //   port: mysqlConfig.port,
// //   synchronize: false,
// //   logging: false,
// //   entities: ['src/entities/**/*.entity{.ts,.js}'],
// //   migrations: ['src/migrations/**/*{.ts,.js}'],
// //   subscribers: ['src/subscribers/**/*{.ts,.js}'],
// // });

// // export async function createMySQLConnection() {
// //   const connection = await createConnection({
// //     host: mysqlConfig.host,
// //     user: mysqlConfig.username,
// //     password: mysqlConfig.password,
// //     database: mysqlConfig.database,
// //     port: mysqlConfig.port,
// //     connectionLimit: 100,
// //   });
// //   return connection;
// // }

// require('dotenv').config();
// import 'reflect-metadata';
// import { DataSource } from 'typeorm';
// import config from 'config';
// import { createConnection } from 'mysql2/promise';

// const mysqlConfig = config.get<{
//   host: string;
//   port: number;
//   username: string;
//   password: string;
//   database: string;
// }>('mysqlConfig');

// export const AppDataSource = new DataSource({
//   type: 'mysql',
//   host: process.env.DATABASE_HOST,
//   port: parseInt(process.env.PORT, 10),
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
//   synchronize: false,
//   logging: false,
//   entities: ['src/entities/**/*.entity{.ts,.js}'],
// //   migrations: ['src/migrations/**/*{.ts,.js}'],
// //   subscribers: ['src/subscribers/**/*{.ts,.js}'],
// //   connect: async () => {
// //     const connection = await createConnection({
// //       host:process.env.DATABASE_HOST,
// //       port: parseInt(process.env.PORT, 10),
// //       user: process.env.DATABASE_USER,
// //       password: process.env.DATABASE_PASSWORD,
// //       database: process.env.DATABASE,
// //     });
// //     return connection;
// //   },
// });
