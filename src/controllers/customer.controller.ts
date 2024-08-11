import { Request, Response } from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomer,
  getOneCustomer,
  updateCustomer,
  getByEmailCustomer,
} from "../services/customer.service";
export class CustomerController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllCustomer();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await getOneCustomer(
      parseInt(id) as number
    );
    return res.status(status).json({
      message,
      data,
    });
  };

  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createCustomer(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await updateCustomer(
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
    const { status, message, data } = await deleteCustomer(
      parseInt(id) as number,
      req.body
    );
    return res.status(status).json({
      message,
      data,
    });
  };
}
