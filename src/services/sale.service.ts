import {
  AccountDB,
  AccountRecordDB,
  JournalDB,
  ProductDB,
  RequestDB,
  SaleDB,
  SaleDetailDB,
  db,
} from "../config";
import { calculateBalance } from "../helpers";
import {
  AccountRecordInterface,
  JournalInterface,
  RequestInterface,
  SaleInterface,
} from "../interfaces";

export const getAllSale = async () => {
  try {
    const sales = await SaleDB.findAll();
    return {
      message: `¡Ventas encontradas exitosamente!`,
      status: 200,
      data: {
        sales,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacta con el administrador`,
      status: 500,
    };
  }
};

export const getOneSale = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    const sale = await SaleDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (!sale) {
      console.log("No encontrado");
      return {
        message: `Venta no encontrado`,
        status: 404,
        data: {},
      };
    } else {
      return {
        message: `Venta encontrada`,
        status: 200,
        data: {
          sale,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: `Contacta con el administrador`,
      status: 500,
    };
  }
};
export const createSale = async (dat: SaleInterface) => {
  const transaction = await db.transaction();
  try {
    //consultas a la base de datos van aca
    const sale = await SaleDB.create(
      {
        customer_id: dat.customer_id,
        discount: dat.discount,
        tax_id: dat.tax_id,
        sale_details: dat.sale_details, // Aquí pasamos el array de detalles
      },
      {
        include: [{ model: SaleDetailDB }], // Incluir el modelo de detalles de venta
        transaction, // Usar la transacción
      }
    );
    let details: any = dat.sale_details;
    // Actualizar la cantidad en la tabla products y calcular el monto total
    let amount: number = 0.0;
    for (const detail of details) {
      amount += detail.quantity * detail.price;
      await ProductDB.update(
        { quantity: db.literal(`quantity - ${detail.quantity}`) },
        { where: { id: detail.product_id }, transaction } // Usar la transacción
      );
    }

    //lógica de finanzas
    /* No borrar, pro alguna razon dejod e funcionar, deberia ejecutarse
    const request = await RequestDB.create(
      {
        request_type_id: 2, //asi lo definimos en el seed para la venta al contado
        description: "Registro de Venta al contado",
        amount,
        status: "aprobada",
        journals: [
          {
            account_records: {
              account_id: 1, //es banco
              name: "Banco Principal",
              type: "debe",
              amount,
            },
          },
          {
            account_records: {
              account_id: 4, //es ventas
              name: "Registro de Venta al contado",
              type: "haber",
              amount,
            },
          },
        ],
      },
      {
        include: [
          {
            model: JournalDB,
            include: [AccountRecordDB],
          },
        ],
        transaction,
      }
    );
    */
    const request_db: any = await RequestDB.create(
      {
        request_type_id: 2,
        description: "Registro de Venta al contado",
        amount,
        status: "aprobada",
      },
      { transaction }
    );
    let request: RequestInterface = { ...request_db.dataValues };
    request.journals=[];
    //definimos los datos del libro por defecto, puede ser variable si envias la data del cliente y las cuentas son existentes
    let accounts_records: Partial<AccountRecordInterface>[] = [
      {
        account_id: 1, //es banco
        name: "Banco Principal",
        type: "debe",
        amount,
      },
      {
        account_id: 4, //es venta
        name: "Registro de Venta al contado",
        type: "haber",
        amount,
      },
    ];
    for (let i = 0; i < accounts_records.length; i++) {
      //registramos el acoount record del diario
      const account_record_db: any = await AccountRecordDB.create(
        {
          ...accounts_records[i],
        },
        { transaction: transaction }
      );
      let account_record: AccountRecordInterface = account_record_db.dataValues;
      //procedemos actualizar el balance de la cuenta
      const account_db:any=await AccountDB.findOne({ where: { id:accounts_records[i].account_id } })
      const balance =calculateBalance(account_db.dataValues.type_account,amount,accounts_records[i].type!,account_db.dataValues.balance);
      await AccountDB.update({
        balance
      },
      {
        where: {
          id:accounts_records[i].account_id
        },
        returning: true,
        transaction: transaction
      })
      //registramos el reglon del diario correspondiente a la cuenta
      const journal_db: any = await JournalDB.create(
        {
          request_id: request.id,
          account_record_id: account_record.id,
          status: true,
        },
        { transaction: transaction }
      );
      
      let journal: JournalInterface = { ...journal_db.dataValues };
      journal.account_record = account_record;
      request.journals.push(journal);
    }
    await transaction.commit(); // Confirmar la transacción
    return {
      message: `¡Venta registrada exitosamente!`,
      status: 200,
      data: {
        sale,
        request,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacta con el administrador`,
      status: 500,
    };
  }
};

export const updateSale = async (id: number, dat: SaleInterface) => {
  try {
    //consultas a la base de datos van aca
    const sale = await SaleDB.update(
      {
        status: dat.status,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const { data } = await getOneSale(id);
    return {
      message: `¡Venta actualizada exitosamente!`,
      status: 200,
      data: {
        sale: data?.sale,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacta con el administrador`,
      status: 500,
    };
  }
};
export const deleteSale = async (id: number, data: SaleInterface) => {
  try {
    //consultas a la base de datos van aca
    const sale = await SaleDB.update(
      {
        status: false,
        deletedAt: new Date(),
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    return {
      message: `¡Venta eliminada exitosamente!`,
      status: 200,
      data: {
        sale,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacta con el administrador`,
      status: 500,
    };
  }
};
