import { AccountRecordInterface } from "../../interfaces";

const accountRecordsSeeds: Partial<AccountRecordInterface>[] = [
  {
    account_id: 1,//es banco
    type: "debe",
    name: "Banco Principal",
    amount: 50000.00,
  },
  {
    account_id: 2,//es capital
    type: "haber",
    name: "capital",
    amount: 50000.00,
  },
  {
    account_id: 1,//es banco
    type: "debe",
    name: "Banco Principal",
    amount: 3500.00,
  },
  {
    account_id: 4,//es ventas
    type: "haber",
    name: "Ventas al contado banco",
    amount: 3500.00,
  },
  {
    account_id: 1,//es banco
    type: "debe",
    name: "Banco Principal",
    amount: 9000.00,
  },
  {
    account_id: 4,//es ventas
    type: "haber",
    name: "Ventas al contado banco",
    amount: 9000.00,
  },
  {
    account_id: 3,//es compra
    type: "debe",
    name: "Compras al contado banco",
    amount: 10500.00,
  },
  {
    account_id: 1,//es banco
    type: "haber",
    name: "Banco Principal",
    amount: 10500.00,
  },

  
];

export { accountRecordsSeeds };