import { Request, Response } from "express";
import {
  createPurchase,
  deletePurchase,
  getAllPurchase,
  getOnePurchase,
  updatePurchase,
} from "../services/purchase.service";
export class PurchaseController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllPurchase();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await getOnePurchase(
      parseInt(id) as number
    );
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createPurchase(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await updatePurchase(
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
    const { status, message, data } = await deletePurchase(
      parseInt(id) as number,
      req.body
    );
    return res.status(status).json({
      message,
      data,
    });
  };
}
