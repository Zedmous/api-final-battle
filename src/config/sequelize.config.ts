import { Sequelize } from "sequelize";

import {
  AccountModel,
  AccountRecordModel,
  CustomerModel,
  JournalModel,
  ProductModel,
  PurchaseDetailModel,
  PurchaseModel,
  RequestModel,
  RequestTypeModel,
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
  const dbUser: string | undefined = process.env.DATABASE_USER
  ? process.env.DATABASE_USER
  : "root";
const db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

//CREAMOS LAS TABLAS DE LA BASE DE DATOS EN ORDEN ALFABETICO
const CustomerDB = db.define("customers", CustomerModel);
const ProductDB = db.define("products", ProductModel);
const RoleDB = db.define("roles", RoleModel);
const SaleDetailDB = db.define("sale_details", SaleDetailModel);
const SaleDB = db.define("sales", SaleModel);
const PurchaseDetailDB = db.define("purchase_details", PurchaseDetailModel);
const PurchaseDB = db.define("purchases", PurchaseModel);
const TaxDB = db.define("taxes", TaxModel);
const UserDB = db.define("users", UserModel);
const AccountDB = db.define("accounts", AccountModel);
const AccountRecordDB = db.define("account_records", AccountRecordModel);
const RequestTypeDB = db.define("request_types", RequestTypeModel);
const RequestDB = db.define("requests", RequestModel);
const JournalDB = db.define("journals", JournalModel);

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
SaleDetailDB.belongsTo(ProductDB, { foreignKey: "product_id" });

PurchaseDB.hasMany(PurchaseDetailDB, { foreignKey: "purchase_id" });
PurchaseDetailDB.belongsTo(PurchaseDB, { foreignKey: "purchase_id" });
ProductDB.hasMany(PurchaseDetailDB, { foreignKey: "product_id" });
PurchaseDetailDB.belongsTo(ProductDB, { foreignKey: "product_id" });

RequestTypeDB.hasMany(RequestDB, { foreignKey: "request_type_id" });
RequestDB.belongsTo(RequestTypeDB, { foreignKey: "request_type_id" });

AccountDB.hasMany(AccountRecordDB, { foreignKey: "account_id" });
AccountRecordDB.belongsTo(AccountDB, { foreignKey: "account_id" });

RequestDB.hasMany(JournalDB, { foreignKey: "request_id" });
JournalDB.belongsTo(RequestDB, { foreignKey: "request_id" });

AccountRecordDB.hasOne(JournalDB, { foreignKey: "account_record_id" });
JournalDB.belongsTo(AccountRecordDB, { foreignKey: "account_record_id" });


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
  PurchaseDetailDB,
  PurchaseDB,
  TaxDB,
  UserDB,
  AccountDB,
  AccountRecordDB,
  RequestTypeDB,
  RequestDB,
  JournalDB,
  db,
};
