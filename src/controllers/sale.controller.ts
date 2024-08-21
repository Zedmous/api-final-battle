import { Request, Response } from "express";
import { createSale, deleteSale, getAllSale, getOneSale, updateSale } from "../services/sale.service";
export class SaleController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllSale();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await getOneSale(parseInt(id) as number);
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createSale(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await updateSale(parseInt(id) as number,req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await deleteSale(parseInt(id) as number,req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  
}
