import { Request, Response } from "express";

import { getAllJournal } from "../services/journal.service";
export class JournalController {
  constructor() {}

  all = async (req: Request, res: Response) => {
    const { status, message, data } = await getAllJournal();
    return res.status(status).json({
      message,
      data,
    });
  };
/*
  one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await getOneJournal(
      parseInt(id) as number
    );
    return res.status(status).json({
      message,
      data,
    });
  };

  create = async (req: Request, res: Response) => {
    const { status, message, data } = await createJournal(req.body);
    return res.status(status).json({
      message,
      data,
    });
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, message, data } = await updateJournal(
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
    const { status, message, data } = await deleteJournal(
      parseInt(id) as number,
      req.body
    );
    return res.status(status).json({
      message,
      data,
    });
  };*/
}
