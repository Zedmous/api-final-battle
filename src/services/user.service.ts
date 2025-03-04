import { UserDB } from "../config";
import { UserInterface } from "../interfaces";

export const getAllUser = async () => {
  try {
    //consultas a la base de datos van aca
    /*const users = await User.findAll({
        where: {
          status: true,
        },
      });*/
    const users = await UserDB.findAll();

    if (users.length == 0) {
      return {
        message: `No hay usuarios encontrados`,
        status: 200,
        data: {
          users,
        },
      };
    }
    return {
      message: `Usuarios encontrados exitosamente`,
      status: 200,
      data: {
        users,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};

export const getOneUser = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    const user = await UserDB.findOne({ where: { id } }); // Busca el proyecto con título 'Mi Título'
    if (user === null) {
      console.log("No encontrado");
      return {
        message: `Usuario no encontrado`,
        status: 404,
        data: {},
      };
    } else {
      return {
        message: `Usuario encontrado`,
        status: 200,
        data: {
          user,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};
export const createUser = async (data: UserInterface) => {
  try {
    //consultas a la base de datos van aca
    const user = await UserDB.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    });

    return {
      message: `Creacion del usuario exitoso`,
      status: 200,
      data: {
        user,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};

export const updateUser = async (id: number, dat: UserInterface) => {
  try {
    //consultas a la base de datos van aca
    const user = await UserDB.update(
      {
        name: dat.name,
        email: dat.email,
        role_id: dat.role_id,
        status: true,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const { data } = await getOneUser(id);
    return {
      message: `Actualización del Rol exitoso`,
      status: 200,
      data: {
        user:data?.user,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};
export const deleteUser = async (id: number, data: UserInterface) => {
  try {
    //consultas a la base de datos van aca
    const user = await UserDB.update(
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
        user,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};

export const getByEmailUser = async (data: UserInterface) => {
  try {
    //consultas a la base de datos van aca
    const user: UserInterface | any = await UserDB.findOne({
      where: { email: data.email },
    });
    if (!user) {
      return {
        message: `Usuario no encontrado`,
        status: 404,
        data: {
          user,
        },
      };
    } else {
      return {
        message: `Usuario encontrado`,
        status: 200,
        data: {
          user,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: `Contact the administrator: error`,
      status: 500,
    };
  }
};
