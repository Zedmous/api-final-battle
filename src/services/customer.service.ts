import { CustomerDB } from "../config";
import { CustomerInterface } from "../interfaces";

export const getAllCustomer = async () => {
  try {
    //consultas a la base de datos van aca
    const customers = await CustomerDB.findAll({
      where: {
        status: true,
      },
    });

    if (customers.length == 0) {
      return {
        message: `No hay registros encontrados`,
        status: 200,
        data: {
          customers,
        },
      };
    }
    return {
      message: `Registros encontrados exitosamente`,
      status: 200,
      data: {
        customers,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacte con el administrador`,
      status: 500,
    };
  }
};

export const getOneCustomer = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    let customer: CustomerInterface | any = await CustomerDB.findOne({
      where: { id },
    }); // Busca el proyecto con título 'Mi Título'
    if (customer === null) {
      return {
        message: `Registro no encontrado`,
        status: 404,
        data: {},
      };
    } else {
      return {
        message: `Registro encontrado`,
        status: 200,
        data: {
          customer,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: `Contacte con el administrador`,
      status: 500,
    };
  }
};
export const createCustomer = async (data: CustomerInterface) => {
  try {
    //consultas a la base de datos van aca
    let customer: CustomerInterface | any = await CustomerDB.create({
      name: data.name,
      identification: data.identification,
      email: data.email,
      telephone: data.telephone,
      address: data.address,
    });

    return {
      message: `¡Registrado exitosamente!`,
      status: 200,
      data: {
        customer,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacte con el administrador`,
      status: 500,
    };
  }
};

export const updateCustomer = async (id: number, dat: CustomerInterface) => {
  try {
    let customer: CustomerInterface | any = await CustomerDB.update(
      {
        name: dat.name,
        identification: dat.identification,
        email: dat.email,
        telephone: dat.telephone,
        address: dat.address,
        status: true,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const { data } = await getOneCustomer(id);
    return {
      message: `¡Actualizado exitosamente!`,
      status: 200,
      data: {
        customer: data?.customer,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacte con el administrador`,
      status: 500,
    };
  }
};
export const deleteCustomer = async (id: number, data: CustomerInterface) => {
  try {
    //consultas a la base de datos van aca
    const customer = await CustomerDB.update(
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
      message: `¡Eliminado exitosamente!`,
      status: 200,
      data: {
        customer,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contacte con el administrador`,
      status: 500,
    };
  }
};

export const getByEmailCustomer = async (email: string) => {
  try {
    //consultas a la base de datos van aca
    const customer: CustomerInterface | any = await CustomerDB.findOne({
      where: { email },
    });
    if (!customer) {
      return {
        message: `Registro no encontrado`,
        status: 404,
        data: {
          customer,
        },
      };
    } else {
      return {
        message: `Registro encontrado`,
        status: 200,
        data: {
          customer,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: `Contacte con el administrador`,
      status: 500,
    };
  }
};
