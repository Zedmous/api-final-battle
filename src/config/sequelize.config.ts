import { Sequelize } from "sequelize";

import {
  CustomerModel,
  ProductModel,
  RoleModel,
  SaleDetailModel,
  SaleModel,
  TaxModel,
  UserModel,
} from "../models";

const dbName: string | undefined = process.env.DATABASE_NAME
  ? process.env.DATABASE_NAME
  : "";
const dbPassword: string | undefined = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : "";

const db = new Sequelize(dbName, "root", dbPassword, {
  dialect: "mysql",
  host: "localhost",
});

//CREAMOS LAS TABLAS DE LA BASE DE DATOS EN ORDEN ALFABETICO
const CustomerDB = db.define("customers", CustomerModel);
const ProductDB = db.define("products", ProductModel);
const RoleDB = db.define("roles", RoleModel);
const SaleDetailDB = db.define("sale_details", SaleDetailModel);
const SaleDB = db.define("sales", SaleModel);
const TaxDB = db.define("taxes", TaxModel);
const UserDB = db.define("users", UserModel);

// Relaciones
RoleDB.hasMany(UserDB, { foreignKey: "role_id" });
UserDB.belongsTo(RoleDB, { foreignKey: "role_id" });
CustomerDB.hasMany(SaleDB, { foreignKey: "customer_id" });
SaleDB.belongsTo(CustomerDB, { foreignKey: "customer_id" });
TaxDB.hasMany(SaleDB, { foreignKey: "tax_id" });
SaleDB.belongsTo(TaxDB, { foreignKey: "tax_id" });
SaleDB.hasMany(SaleDetailDB, { foreignKey: "sale_id" });
SaleDetailDB.belongsTo(SaleDB, { foreignKey: "sale_id" });
ProductDB.hasMany(SaleDetailDB, { foreignKey: "product_id" });
SaleDetailDB.belongsTo(SaleDetailDB, { foreignKey: "product_id" });

// Sincroniza los modelos con la base de datos
const syncModels = async () => {
  await db.sync({ alter: true });
  try {
  } catch (error) {
    console.error(error);
  }
};
syncModels();
//export default db;

export {
  CustomerDB,
  ProductDB,
  RoleDB,
  SaleDetailDB,
  SaleDB,
  TaxDB,
  UserDB,
  db,
};
