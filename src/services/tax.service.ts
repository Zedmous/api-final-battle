import { TaxDB } from "../config";
import { TaxInterface } from "../interfaces";

export const getAllTax = async () => {
  try {
    //consultas a la base de datos van aca
    const taxs = await TaxDB.findAll({
        where: {
          status: true,
        },
      });

    if(taxs.length==0){
      return {
        message: `No hay impuestos encontrados`,
        status: 200,
        data: {
          taxs,
        },
      };
    }
    return {
      message: `Impuestos encontrados exitosamente`,
      status: 200,
      data: {
        taxs,
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



export const getOneTax = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    let tax:TaxInterface|any = await TaxDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (tax === null) {
      console.log("No encontrado");
      return {
        message: `Usuario no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Usuario encontrado`,
        status: 200,
        data: {
          tax,
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
export const createTax = async (data: TaxInterface) => {
  try {
    //consultas a la base de datos van aca
    let tax:TaxInterface|any = await TaxDB.create({
      name:data.name,
      percentage:data.percentage
    });

    return {
      message: `Creacion del usuario exitoso`,
      status: 200,
      data: {
        tax,
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

export const updateTax = async (id: number, dat: TaxInterface) => {
  try {
    
    let tax:TaxInterface|any = await TaxDB.update(
      {
        name:dat.name,
        percentage:dat.percentage,
        status:true
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const {data}= await getOneTax(id);
    return {
      message: `Actualización del Impuesto exitoso`,
      status: 200,
      data: {
        tax:data?.tax,
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
export const deleteTax = async (id: number, data: TaxInterface) => {
  try {
    //consultas a la base de datos van aca
    const tax = await TaxDB.update(
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
      message: `Eliminación del Impuesto exitoso`,
      status: 200,
      data: {
        tax,
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
