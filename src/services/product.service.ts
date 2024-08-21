import { ProductDB } from "../config";
import { ProductInterface } from "../interfaces";

export const getAllProduct = async () => {
  try {
    //consultas a la base de datos van aca
    const products = await ProductDB.findAll({
      where: {
        status: true,
      },
    });

    if (products.length == 0) {
      return {
        message: `No hay productos encontrados`,
        status: 200,
        data: {
          products,
        },
      };
    }
    return {
      message: `Productos encontrados exitosamente`,
      status: 200,
      data: {
        products,
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

export const getOneProduct = async (id: number) => {
  try {
    //consultas a la base de datos van aca
    let product: ProductInterface | any = await ProductDB.findOne({
      where: { id },
    }); // Busca el proyecto con título 'Mi Título'
    if (product === null) {
      console.log("No encontrado");
      return {
        message: `Producto no encontrado`,
        status: 404,
        data: {},
      };
    } else {
      return {
        message: `Producto encontrado`,
        status: 200,
        data: {
          product,
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
export const createProduct = async (dat: ProductInterface) => {
  try {
    //consultas a la base de datos van aca
    let product: ProductInterface | any = await ProductDB.create({
      name: dat.name,
      price: dat.price,
      quantity: dat.quantity,
      minimum_stock: dat.minimum_stock,
    });

    return {
      message: `Creacion del producto exitoso`,
      status: 200,
      data: {
        product,
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

export const updateProduct = async (id: number, dat: ProductInterface) => {
  try {
    let product: ProductInterface | any = await ProductDB.update(
      {
        name: dat.name,
        price: dat.price,
        quantity: dat.quantity,
        minimum_stock: dat.minimum_stock,
        status: true,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const { data } = await getOneProduct(id);
    return {
      message: `Actualización del Producto exitoso`,
      status: 200,
      data: {
        product: data?.product,
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
export const deleteProduct = async (id: number, data: ProductInterface) => {
  try {
    //consultas a la base de datos van aca
    const product = await ProductDB.update(
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
      message: `Eliminación del Producto exitoso`,
      status: 200,
      data: {
        product,
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

export const getByEmailProduct = async (email: string) => {
  try {
    //consultas a la base de datos van aca
    const product: ProductInterface | any = await ProductDB.findOne({
      where: { email },
    });
    if (!product) {
      return {
        message: `Producto no encontrado`,
        status: 404,
        data: {
          product,
        },
      };
    } else {
      return {
        message: `Producto encontrado`,
        status: 200,
        data: {
          product,
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
