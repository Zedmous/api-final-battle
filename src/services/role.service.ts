import { RoleDB } from "../config";
import { RoleInterface } from "../interfaces";

export const getAllRole = async () => {
  try {
    //consultas a la base de datos van aca
    /*const roles = await RoleDB.findAll({
        where: {
          status: true,
        },
      });*/
    const roles = await RoleDB.findAll();
    return {
      message: `C de Rol exitoso`,
      status: 200,
      data: {
        roles,
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



export const getOneRole = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    const role = await RoleDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (role === null) {
      console.log("No encontrado");
      return {
        message: `Role no encontrado`,
        status: 404,
        data: {
        },
      };
    } else {
      return {
        message: `Role encontrado`,
        status: 200,
        data: {
          role,
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
export const createRole = async (dat: RoleInterface) => {
  try {
    //consultas a la base de datos van aca
    const role = await RoleDB.create({
      name:dat.name,
    });

    return {
      message: `Creacion de Rol exitoso`,
      status: 200,
      data: {
        role,
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

export const updateRole = async (id: number, dat: RoleInterface) => {
  try {
    //consultas a la base de datos van aca
    const role = await RoleDB.update(
      {
        name:dat.name,
        status:true,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const {data}= await getOneRole(id);
    return {
      message: `Actualización del Rol exitoso`,
      status: 200,
      data: {
        role:data?.role,
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
export const deleteRole = async (id: number, data: RoleInterface) => {
  try {
    //consultas a la base de datos van aca
    const role = await RoleDB.update(
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
        role,
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
