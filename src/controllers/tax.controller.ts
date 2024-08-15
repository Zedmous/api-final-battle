import { Request, Response } from "express";
import {
  createTax,
  deleteTax,
  getAllTax,
  getOneTax,
  updateTax,
} from "../services/tax.service";
export class TaxController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllTax();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await getOneTax(
      parseInt(id) as number
    );
    return res.status(status).json({
      message,
      data,
    });
  };

  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createTax(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await updateTax(
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
    const { status, message, data } = await deleteTax(
      parseInt(id) as number,
      req.body
    );
    return res.status(status).json({
      message,
      data,
    });
  };
}
