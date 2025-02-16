import { Router } from "express";
import { validateFields } from "../middlewares";
import { JournalController } from "../controllers";
const router = Router();
const journalController=new JournalController();

router.get("/", journalController.all);


export default router;