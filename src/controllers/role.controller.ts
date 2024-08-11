import { Request, Response } from "express";
import { createRole, deleteRole, getAllRole, getOneRole, updateRole } from "../services/role.service";
export class RoleController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllRole();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await getOneRole(parseInt(id) as number);
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createRole(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await updateRole(parseInt(id) as number,req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await deleteRole(parseInt(id) as number,req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  
}
