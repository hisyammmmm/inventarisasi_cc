import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

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
