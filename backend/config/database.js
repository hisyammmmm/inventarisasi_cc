import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log("Connecting to DB with:", {
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
});

export const mysqlDb = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USERNAME,
  process.env.MYSQL_DB_PASSWORD, // pastikan password sesuai
  {
    host: process.env.MYSQL_DB_HOST,
    dialect: "mysql",
    logging: console.log, // Aktifkan logging jika diperlukan untuk debugging
  }
);
