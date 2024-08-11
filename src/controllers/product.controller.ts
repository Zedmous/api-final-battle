import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
} from "../services/product.service";
export class ProductController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllProduct();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await getOneProduct(
      parseInt(id) as number
    );
    return res.status(status).json({
      message,
      data,
    });
  };

  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createProduct(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await updateProduct(
      parseInt(id) as number,
      req.body
    );
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await deleteProduct(
      parseInt(id) as number,
      req.body
    );
    return res.status(status).json({
      message,
      data,
    });
  };
}
