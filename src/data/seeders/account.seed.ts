import { AccountInterface } from "../../interfaces";

const accountsSeeds: Partial<AccountInterface>[] = [
  {
    name: "Banco",
    type_account: "activo",
    status: true,
  },
  {
    name: "Capital",
    type_account: "capital",
    status: true,
  },
  {
    name: "Compras",
    type_account: "egreso", 
    status: true,
  },
  {
    name: "Ventas",
    type_account: "ingreso", 
    status: true,
  },
  
];

export { accountsSeeds };