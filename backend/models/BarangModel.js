import { DataTypes } from "sequelize";
import { mysqlDb } from "../config/database.js";  // Gunakan mysqlDb

const Barang = mysqlDb.define("barang", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  kode_barang: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  nama_barang: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  kategori: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  satuan: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: "unit",
  },
  kondisi: {
    type: DataTypes.ENUM("baik", "rusak_ringan", "rusak_berat", "hilang"),
    allowNull: false,
    defaultValue: "baik",
  },
  lokasi: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  keterangan: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: "barang",
});

// Sync tabel barang dengan MySQL
mysqlDb.sync().then(() => console.log("MySQL: barang table synced"));

export default Barang;
