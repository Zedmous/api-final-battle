import "dotenv/config";

import {
  AccountDB,
  AccountRecordDB,
  JournalDB,
  ProductDB,
  RequestDB,
  RequestTypeDB,
  RoleDB,
  SaleDB,
  UserDB,
  db,
} from "../config";

import {
  accountsSeeds,
  accountRecordsSeeds,
  journalsSeeds,
  requestsSeeds,
  requestTypesSeeds,
  rolesSeeds,
  usersSeeds,
} from "../data/seeders";

async function insertSeeders() {
  // Ordenamos los seeders por niveles de jerarquía
  /*
  const models = {
    level1: ["roles","customers","taxes","products","request_types","accounts"],
    level2: ["users","sales","requests","account_records"],
    level3: ["journal","sale_details"],
  };
  */
  try {
    console.log("Insertando seeds de nivel 1...");
    await RoleDB.bulkCreate(rolesSeeds, { ignoreDuplicates: true, validate: true });
    //await ProductDB.bulkCreate(productSeeds, { ignoreDuplicates: true, validate: true });
    await RequestTypeDB.bulkCreate(requestTypesSeeds, { ignoreDuplicates: true, validate: true });
    await AccountDB.bulkCreate(accountsSeeds, { ignoreDuplicates: true, validate: true });
    console.log("Insertando seeds de nivel 2...");
    await UserDB.bulkCreate(usersSeeds, { ignoreDuplicates: true, validate: true });
    await RequestDB.bulkCreate(requestsSeeds, { ignoreDuplicates: true, validate: true });
    await AccountRecordDB.bulkCreate(accountRecordsSeeds, { ignoreDuplicates: true, validate: true });
    console.log("Insertando seeds de nivel 3...");
    //await SaleDB.bulkCreate(saleSeeds, { ignoreDuplicates: true, validate: true });
    await JournalDB.bulkCreate(journalsSeeds, { ignoreDuplicates: true, validate: true });
    console.log("Se insertaron todos los seeds correctamente.");
  } catch (error) {
    console.error("Error al insertar seeds:", error);
  }
}

const eject = async () => {
  await db
    .authenticate()
    .then(() => {
      console.log("Conexión exitosa a la base de datos");
    })
    .catch((error: any) => {
      console.log("No se pudo conectar a la base de datos");
    });

  await insertSeeders();
};



eject();