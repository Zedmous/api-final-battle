import {
  RequestDB,
  PurchaseDB,
  PurchaseDetailDB,
  db,
} from "../config";
import {
  PurchaseInterface,
} from "../interfaces";

export const getAllPurchase = async () => {
  try {
    const purchases = await PurchaseDB.findAll();
    return {
      message: `¡Compras encontradas exitosamente!`,
      status: 200,
      data: {
        purchases,
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

export const getOnePurchase = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    const purchase = await PurchaseDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (!purchase) {
      console.log("No encontrado");
      return {
        message: `Compra no encontrado`,
        status: 404,
        data: {},
      };
    } else {
      return {
        message: `Compra encontrada`,
        status: 200,
        data: {
          purchase,
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
export const createPurchase = async (dat: PurchaseInterface) => {
  const transaction = await db.transaction();
  try {
    //consultas a la base de datos van aca
    const purchase = await PurchaseDB.create(
      {
        supplier_id: dat.supplier_id,
        reference: dat.reference,
        purchase_details: dat.purchase_details, // Aquí pasamos el array de detalles
      },
      {
        include: [{ model: PurchaseDetailDB }], // Incluir el modelo de detalles de venta
        transaction, // Usar la transacción
      }
    );
    let details: any = dat.purchase_details;
    //calcular el monto total para la solicitud
    let amount: number = 0.0;
    for (const detail of details) {
      amount += detail.quantity * detail.price;
    }

    //lógica de finanzas
    const request = await RequestDB.create(
      {
        request_type_id: 3, //asi lo definimos en el seed para la compra
        description: "Solicitud de Compra",
        amount,
        status: "pendiente",
      },
      {
        transaction,
      }
    );
    await transaction.commit(); // Confirmar la transacción
    return {
      message: `¡Compra registrada exitosamente!`,
      status: 200,
      data: {
        purchase,
        request
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

export const updatePurchase = async (id: number, dat: PurchaseInterface) => {
  try {
    //consultas a la base de datos van aca
    const purchase = await PurchaseDB.update(
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
    const { data } = await getOnePurchase(id);
    return {
      message: `¡Compra actualizada exitosamente!`,
      status: 200,
      data: {
        purchase: data?.purchase,
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
export const deletePurchase = async (id: number, data: PurchaseInterface) => {
  try {
    //consultas a la base de datos van aca
    const purchase = await PurchaseDB.update(
      {
        status: 'rechazada',
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
      message: `¡Compra eliminada exitosamente!`,
      status: 200,
      data: {
        purchase,
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
