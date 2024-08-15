import { Router } from "express";
import { validateFields } from "../middlewares";
import { TaxController } from "../controllers";
import { TaxValidator } from "../validators";
const taxValidator = new TaxValidator();
const router = Router();
const taxController=new TaxController();
router.get("/", taxController.all);
router.get("/:id", taxController.one);
router.post("/",taxValidator.validateTax,validateFields, taxController.create);
router.put("/:id",taxValidator.validateTax,validateFields, taxController.update);
router.delete("/:id", taxController.delete);

export default router;