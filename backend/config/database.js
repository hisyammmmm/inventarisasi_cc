import { Sequelize } from 'sequelize';

export const mysqlDb = new Sequelize(
  'db_inventaris',     // Ganti dengan nama database kamu
  'root', // Ganti dengan username database kamu
  '', // Ganti dengan password database kamu
  {
    host: '34.46.219.217',  // Misalnya IP Public Cloud SQL atau MySQL server
    dialect: 'mysql',
    logging: console.log,         // bisa true/false, untuk debugging
  }
);
