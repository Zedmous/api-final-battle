import { Router } from "express";
import { validateFields } from "../middlewares";
import { PurchaseController } from "../controllers";
import { PurchaseValidator } from "../validators";
const purchaseValidator = new PurchaseValidator();
const router = Router();
const purchaseController=new PurchaseController();
router.get("/", purchaseController.all);
router.get("/:id", purchaseController.one);
router.post("/",purchaseValidator.validatePurchase,validateFields, purchaseController.create);
router.put("/:id",purchaseValidator.validatePurchase,validateFields, purchaseController.update);
router.delete("/:id", purchaseController.delete);

export default router;