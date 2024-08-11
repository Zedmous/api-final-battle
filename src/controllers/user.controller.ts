
import { Request, Response } from "express";
import { createUser, deleteUser, getAllUser, getOneUser, updateUser, getByEmailUser } from '../services/user.service';
export class UserController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllUser();
    return res.status(status).json({
      message,
      data,
    });
  };

  one = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await getOneUser(parseInt(id) as number);
    return res.status(status).json({
      message,
      data,
    });
  };
  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createUser(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  update = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await updateUser(parseInt(id) as number,req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  delete = async (req: Request, res: Response) => {
    const {id}=req.params
    const { status, message, data } = await deleteUser(parseInt(id) as number,req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
  
  login = async (req: Request, res: Response) => {

    const { status, message, data } = await getByEmailUser(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };
}
