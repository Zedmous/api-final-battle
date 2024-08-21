import { SaleDB, SaleDetailDB } from "../config";
import { SaleInterface } from "../interfaces";

export const getAllSale = async () => {
  try {
    const sales = await SaleDB.findAll();
    return {
      message: `Ventas encontradas`,
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
      }
    );

    return {
      message: `Creacion de Rol exitoso`,
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
      message: `Actualización del Rol exitoso`,
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
      message: `Eliminación del Rol exitoso`,
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
